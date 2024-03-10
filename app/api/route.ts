// Import necessary modules and types
import sendEmail from '@/lib/send_email';
import { NextRequest, NextResponse } from 'next/server';
import { PDFDocument, rgb } from 'pdf-lib';
// TypeScript interface for the request body
interface PdfData {
  input1?: string;
  input2?: string;
  buttonChoice?: 'Yes' | 'No';
  date?: string;
}

export async function POST(request: NextRequest) {
  const data: PdfData = await request.json();

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 300]);
  const textSize = 12;
  const questionColor = rgb(0, 0, 0); // Black color for question
  const answerBackgroundColor = rgb(0.75, 0.75, 0.75); // Grey color for answer background

  // Function to draw question and answer
  const drawQuestionAnswer = (x: number, y: number, question: string, answer?: string) => {
    // Draw the question in bold and black
    page.drawText(question, {
      x,
      y,
      size: textSize,
      color: questionColor, // Ensure your PDF library version supports font embedding
    });

    if (answer) {
      const answerX = x + 200; // Adjust based on your layout
      // Draw a grey rectangle behind the answer
      page.drawRectangle({
        x: answerX,
        y: y - 4, // Adjust to align with the text baseline
        width: 150, // Adjust based on the expected length of answers
        height: textSize + 2, // Slightly larger than text size for padding
        color: answerBackgroundColor,
      });
      // Draw the answer text over the rectangle
      page.drawText(answer, {
        x: answerX + 2, // Small padding from the rectangle's border
        y,
        size: textSize,
        color: questionColor,
      });
    }
  };

  // Coordinates for the first item, adjust as needed
  let y = 280;
  const x = 50;

  // Drawing questions and answers
  if (data.input1) drawQuestionAnswer(x, (y -= 20), 'Input 1:', data.input1);
  if (data.input2) drawQuestionAnswer(x, (y -= 20), 'Input 2:', data.input2);
  if (data.buttonChoice) drawQuestionAnswer(x, (y -= 20), 'Button choice:', data.buttonChoice);
  if (data.date) drawQuestionAnswer(x, (y -= 20), 'Date:', data.date);

  const pdfBytes = await pdfDoc.save();
  await sendEmail(pdfBytes);
  // Return the PDF as a response
  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated-pdf.pdf"',
    },
  });
}
