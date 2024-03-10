import nodemailer from 'nodemailer';

export default async function sendEmail(pdfBytes: any) {
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net', // OVH SMTP server
    port: 587, // SMTP port (could be different based on your settings, e.g., 465)
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'noreply@sea-electronics.com', // Your OVH email address
      pass: 'wassimSEA2023', // Your OVH email password
    },
  });

  const mailOptions = {
    from: '"Sender Name" <no-replay@sea-electronics.com>',
    to: 'wael.hassine0@gmail.com',
    subject: 'Here is your PDF',
    text: 'Please find the attached PDF.',
    attachments: [
      {
        filename: 'generated-pdf.pdf',
        content: Buffer.from(pdfBytes), // Convert Uint8Array to Buffer
        contentType: 'application/pdf',
      },
    ],
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
