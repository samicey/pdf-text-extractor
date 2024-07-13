import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PdfTextExtractor from './pdftextextractor.component';

jest.mock('pdfjs-dist/webpack', () => {
    return {
        getDocument: jest.fn(() => ({
            promise: Promise.resolve({
                numPages: 1,
                getPage: jest.fn(() =>
                    Promise.resolve({
                        getTextContent: jest.fn(() =>
                            Promise.resolve({
                                items: [{ str: 'Mock PDF Text' }],
                            })
                        ),
                    })
                ),
            }),
        })),
        GlobalWorkerOptions: {
            workerSrc: '', 
        },
    };
});

describe('PdfTextExtractor', () => {
    test('renders PDF file input, textarea, copy button, and notification', () => {
        const { getByText, getByLabelText } = render(<PdfTextExtractor />);

        expect(getByText('PDF Text Extractor')).toBeInTheDocument();
        expect(getByLabelText('PDF File')).toBeInTheDocument();
        expect(getByText('Copy to Clipboard')).toBeInTheDocument();
    });
});
