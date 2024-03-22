import nodemailer from 'nodemailer';

export default async function sendEmail(pdfBytes: any, nomFormulaire: string, nom: string, prenom: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'devis.agsgroup@gmail.com',
      pass: 'sjdn dmkf qtho hnad',
    },
  });

  const mailOptions = {
    from: '"Devis" <devis.agsgroup@gmail.com>',
    to: 'devis@agsgroup.fr',
    subject: `${nomFormulaire} - ${prenom} ${nom}`,
    text: 'Veuillez trouver le PDF ci-joint',
    attachments: [
      {
        filename: `Devis ${prenom} ${nom}.pdf`,
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
