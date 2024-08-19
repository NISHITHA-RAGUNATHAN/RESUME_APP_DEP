import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import './UploadResume.css';

// Set workerSrc for pdfjsLib to use the local worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const UploadResume = () => {
    const [resumeText, setResumeText] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            const arrayBuffer = e.target.result;
            if (file.type === 'application/pdf') {
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                const numPages = pdf.numPages;
                let textContent = '';

                for (let pageNum = 1; pageNum <= numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const text = await page.getTextContent();
                    const pageText = text.items.map(item => item.str).join(' ');
                    textContent += pageText + '\n';
                }

                setResumeText(textContent);
            } else {
                setResumeText(e.target.result);
            }
        };

        if (file.type === 'application/pdf') {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsText(file);
        }
    };

    const handleTextChange = (event) => {
        setResumeText(event.target.value);
    };

    const handleSaveAsPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const text = doc.splitTextToSize(resumeText, pageWidth - 20);

        doc.text(text, 10, 10);
        doc.save('resume.pdf');
    };

    const handleSaveAsImage = async () => {
        const element = document.createElement('div');
        element.style.width = '210mm'; // A4 size width in mm
        element.style.padding = '10mm';
        element.style.boxSizing = 'border-box';
        element.innerHTML = resumeText.replace(/\n/g, '<br/>');

        document.body.appendChild(element);

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'resume.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.body.removeChild(element);
    };

    return (
        <div className="upload-resume-container">
            
            <h1>Upload and Modify Your Resume</h1>
            <input
                type="file"
                accept=".txt,.pdf,.doc,.docx"
                onChange={handleFileUpload}
                className="upload-button"
            />
            <textarea
                value={resumeText}
                onChange={handleTextChange}
                className="resume-textarea"
            />
            <div className="button-container">
                <button onClick={handleSaveAsPDF} className="save-button">Save as PDF</button>
                <button onClick={handleSaveAsImage} className="save-button">Save as Image</button>
            </div>
        </div>
    );
};

export default UploadResume;
