## PDF Text Extractor
PDF Text Extractor is a simple web application built with React that allows users to upload a PDF file and extract its text content. This can be useful for scenarios where you need to quickly get text out of a PDF document without manual copying.

![PDF text extractor](https://github.com/samicey/pdf-text-extractor/blob/main/page.png)

## Features
- Upload a PDF file.
- Extract text content from the PDF file.
- Display extracted text in a textarea.
- Copy extracted text to the clipboard with a button click.
- Display notifications when text is copied successfully or when there's  an error.

## Installation
To run this project locally, follow these steps:

## Clone the repository:

```bash
git clone https://github.com/samicey/pdf-text-extractor.git
cd pdf-text-extractor
```

## Install dependencies:

```bash
npm install
```

## Start the application:

```bash
npm start
```

This will start the development server and open the application in your default web browser at http://localhost:3000.

## Usage

Upload a PDF file:

Click on the "Choose File" button and select a PDF file from your local machine.

Extract Text:

After selecting the file, the application will automatically extract the text content from the PDF file and display it in the textarea.

Copy to Clipboard:

Click the "Copy to Clipboard" button to copy the extracted text to your clipboard. A notification will appear indicating whether the text was copied successfully.

## Tests
To run tests for this project, use the following command:

```bash
npm test
```
This will launch the test runner in the interactive watch mode.

## Dependencies
React: A JavaScript library for building user interfaces.
pdfjs-dist: PDF.js is a JavaScript library to render PDF files using the web standards.
