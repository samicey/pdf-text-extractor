import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';

const PdfTextExtractor = () => {
    const [pdfText, setPdfText] = useState('');
    const [loading, setLoading] = useState(false);
    const [copy, setCopy] = useState('Copy to Clipboard');

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        if (file) {
            setLoading(true);
            const reader = new FileReader();
            reader.onload = async (e) => {
                const typedArray = new Uint8Array(e.target.result);
                const pdf = await pdfjsLib.getDocument(typedArray).promise;
                let text = '';
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    text += textContent.items.map(item => item.str).join(' ');
                }
                setPdfText(text);
                setLoading(false);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(pdfText);
            setCopy('Text copied to clipboard!');
        } catch (err) {
            setCopy('Failed to copy text.');
        } finally {
            setTimeout(() => {
                setCopy('Copy to Clipboard');
            }, 3000);
        }
    };

    return (
        <div>
            <h1>PDF Text Extractor</h1>
            <input id="pdfFile" type="file" accept="application/pdf" onChange={handleFileChange} aria-label="PDF File" />
            {loading && <p>Loading...</p>}
            <textarea value={pdfText} readOnly rows="20" cols="80" />
            <button onClick={handleCopy} disabled={!pdfText}> { copy }</button>
        </div>
    );
};

export default PdfTextExtractor;
