import React, { useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import { PDFDocument, rgb } from 'pdf-lib';
import "./ATSComplianceChecker.css";

// Set the worker to the PDF.js worker script
GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js';

// Example keywords to check for ATS compliance
const requiredKeywords = ["JavaScript", "React", "CSS", "HTML", "REST API"];

const ATSComplianceChecker = () => {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfBytes, setPdfBytes] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file || file.type !== "application/pdf") {
      setFeedback("Please upload a valid PDF file.");
      return;
    }

    // Create a URL for the uploaded PDF
    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);

    try {
      const fileBytes = await file.arrayBuffer();
      const pdf = await getDocument({ data: fileBytes }).promise;
      setPdfBytes(fileBytes); // Store the raw PDF bytes for editing
      let extractedText = '';

      for (let i = 0; i < pdf.numPages; i++) {
        const page = await pdf.getPage(i + 1);
        const textContent = await page.getTextContent();
        extractedText += textContent.items.map(item => item.str).join(' ');
      }

      setResumeText(extractedText);
      checkATSCompliance(extractedText);
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
    }
  };

  const checkATSCompliance = (text) => {
    let issues = [];

    // Keyword check
    requiredKeywords.forEach((keyword) => {
      if (!text.includes(keyword)) {
        issues.push(`Missing keyword: ${keyword}`);
      }
    });

    // Simple formatting checks (example: avoiding images, tables)
    if (text.includes("<img") || text.includes("<table")) {
      issues.push("Avoid using images or tables, as they might be ATS-unfriendly.");
    }

    // Provide feedback
    if (issues.length > 0) {
      setFeedback(`Compliance issues found:\n${issues.join("\n")}`);
    } else {
      setFeedback("Your resume is ATS-compliant!");
    }
  };

  const handleZoomIn = () => setZoom(prevZoom => Math.min(prevZoom + 0.1, 2));
  const handleZoomOut = () => setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5));

  const handleEditPDF = async () => {
    if (!pdfBytes) return;
    
    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0]; // Edit the first page for demonstration

      // Example of adding new text
      firstPage.drawText('This is a new text added to the PDF!', {
        x: 50,
        y: 500,
        size: 30,
        color: rgb(0, 0, 0),
      });

      const editedPdfBytes = await pdfDoc.save();
      const editedPdfUrl = URL.createObjectURL(new Blob([editedPdfBytes], { type: 'application/pdf' }));
      setPdfUrl(editedPdfUrl);
    } catch (error) {
      console.error('Error editing PDF:', error);
      setFeedback('Failed to edit the PDF. Please check the console for details.');
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="title">RESUME EDITER</h2>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="file-input"
        />
        {pdfUrl && (
          <div className="pdf-preview-container">
            <div className="pdf-preview-header">
              <span className="pdf-preview-icon">📄</span>
              <span className="pdf-preview-text">Uploaded PDF Preview</span>
            </div>
            <div className="pdf-controls">
              <button onClick={handleZoomOut} className="zoom-button">-</button>
              <button onClick={handleZoomIn} className="zoom-button">+</button>
              <button onClick={handleEditPDF} className="edit-button">Edit PDF</button>
            </div>
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              className="pdf-preview"
              style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}
            />
            <a href={pdfUrl} download className="download-link">Download PDF</a>
          </div>
        )}
        {feedback && <div className="feedback">{feedback}</div>}
      </div>
      <video className="background-video1" autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/4884242/4884242-sd_640_360_30fps.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default ATSComplianceChecker;
