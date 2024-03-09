// Import necessary modules and types
import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb } from 'pdf-lib';


// TypeScript interface for the request body
interface PdfData {
    input1?: string;
    input2?: string;
    buttonChoice?: 'Yes' | 'No';
    date?: string;
  }


export async function POST(request: NextRequest) {
    const { input1, input2, buttonChoice, date }: PdfData = await request.json();
  
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 300]);
  
    // Basic styling for the PDF content
    const textSize = 15;
    const textColor = rgb(0, 0, 0);
    
  
    // Adding text to the PDF
    page.drawText(`Input 1: ${input1}`, { x: 50, y: 250, size: textSize, color: textColor });
    page.drawText(`Input 2: ${input2}`, { x: 50, y: 230, size: textSize, color: textColor });
    page.drawText(`Button choice: ${buttonChoice}`, { x: 50, y: 210, size: textSize, color: textColor });
    page.drawText(`Date: ${date}`, { x: 50, y: 190, size: textSize, color: textColor });
    
  
    // Serialize the PDF document to bytes
    const pdfBytes = await pdfDoc.save();
  
    // Return the PDF as a response
    return new Response(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="generated-pdf.pdf"',
      },
    });
  }