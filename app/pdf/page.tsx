'use client';

// Assuming this is in a file like pages/generate-pdf-page.tsx

import React from 'react';

const GeneratePdfPage: React.FC = () => {
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevents the default action of the button (if it were a submit button inside a form)

    // Define the data object you want to send to the API
    const data = {
      // input1: "John Doe",
      input2: 'Developer',
      buttonChoice: 'Yes',
      date: '2023-03-10',
    };

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle the PDF data returned by the API
        // For example, download the PDF file
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'generated-pdf.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        // Handle errors or unsuccessful responses
        console.error('Failed to generate the PDF');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
  };

  return (
    <div>
      <h1>Generate PDF</h1>
      <button onClick={handleSubmit}>Generate and Download PDF</button>
      <h1>sdsd</h1>
    </div>
  );
};

export default GeneratePdfPage;
