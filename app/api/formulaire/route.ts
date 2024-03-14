// import sendEmail from '@/lib/send_email';
import { NextRequest } from 'next/server';
import { PDFDocument, rgb, PDFPage, StandardFonts } from 'pdf-lib';
import nodemailer from 'nodemailer';

interface KeyMapping {
  [key: string]: string;
}

const keyMapping: KeyMapping = {
  plate: 'Quel est son numéro d immatriculation ?',
  marque: 'Quelle est sa marque ?',
  modele: 'Quel est son modèle ?',
  finition: 'Quelle est sa finition ?',
  dateName: 'Quelle est sa date de mise en circulation ?',
  dateDachat: 'Date d achat',
  type_achat: 'Type d achat',
  modifications_techniques: 'Le véhicule a-t-il subi des modifications techniques ?',
  titulaire_carte_grise: 'Titulaire de la carte grise',
  niveau_couverture: 'Niveau de couverture souhaité',
  type_trajet: 'Type de trajet',
  frequence_utilisation: 'Fréquence d utilisation',
  nb_km: 'Nombre de km parcourus par an',
  type_de_stationnement: 'Type de stationnement',
  type_de_parking_collectif: 'Veuillez préciser le type de parking collectif',
  stationnementstep6: 'Voie de stationnement',
  complementstep6: 'Complément',
  codepostalste6: 'Code postal',
  villestep6: 'Ville',
  Civilitestep7: 'Civilite',
  Prenomstep7: 'Prénom',
  Nomstep7: 'Nom',
  naissance: 'Date de naissance',
  date_permis: 'Date d obtention du permis de conduire',
  type_permis: 'Type de permis',
  CRMstep8: 'Coefficient de Bonus/Malus (CRM)',
  CRM_bonusstep8: 'Nombre d année(s) à 0.5',
  deja_assurestep9: 'Déjà assuré en tant que conducteur principal ?',
  deja_assure_secondairestep9: 'Déjà assuré en tant que conducteur secondaire ?',
  conduite_accompagneestep9: 'Obtention du permis suite à la conduite accompagnée ?',
  suspension_permisstep9: 'Le permis du conducteur principal a-t-il fait l objet de suspension(s) ?',
  objet_annulationstep9: 'Le permis du conducteur principal a-t-il fait l objet d annulation(s) ?',
  card_Conducteur_v2: 'Le conducteur a t il commis des infractions ?',
  card_sinistre_principal: 'Le conducteur a t il déclaré des sinistres ?',
  card_conducteur: 'Antécédents d&apos;assurance',
  conducteur_secondaire: 'un conducteur secondaire ?',
  CiviliteIdentité: 'Civilite',
  ddate_permisConducteur: 'Date d obtention du permis de conduire',
  type_permisConducteur: 'Type de permis',
  CRMConducteur: 'Coefficient de Bonus/Malus (CRM)',
  CRM_bonus_Conducteur: 'Coefficient de Bonus/Malus (CRM)',
  deja_assurestep16: 'Déjà assuré en tant que conducteur principal ?',
  deja_assure_secondairestep16: 'Déjà assuré en tant que conducteur secondaire ?',
  conduite_accompagneestep16: 'Obtention du permis suite à la conduite accompagnée ?',
  suspension_permisstep16: 'Le permis du conducteur principal a-t-il fait l objet de suspension(s) ?',
  objet_annulationstep16: 'Le permis du conducteur principal a-t-il fait l objet d annulation(s) ?',
  card_conducteur_infraction: 'Le conducteur a t il commis des infractions ?',
  card_conducteur_sinistres: 'Le conducteur a til déclaré des sinistres ?',
  card_assurance: 'Antécédents dassurance',
  Civilite: 'Civilite',
  Prenom: 'Prénom',
  Nom: 'Nom',
  Email: 'Email',
  Telephone: 'Téléphone',
  adresse: 'Adresse',
  complement: 'Complément',
  codepostal: 'Code postal',
  ville: 'Ville',
  pays: 'Pays',
};

function transformData(data: any): any {
  if (Array.isArray(data)) {
    return data.map((item) => transformData(item));
  }
  if (typeof data === 'object' && data !== null) {
    const newData: { [key: string]: any } = {}; // Define type for newData
    for (const [key, value] of Object.entries(data)) {
      const newKey = keyMapping[key.trim()] || key.trim(); // Trim and map keys
      newData[newKey] = transformData(value); // Recursively apply transformation
    }
    return newData;
  }
  return data;
}

export async function POST(request: NextRequest) {
  const originalData = await request.json();
  console.log(originalData);
  const data = transformData(originalData); // Transform the incoming JSON data

  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const pageSize: [number, number] = [595, 1200];
  let page = pdfDoc.addPage(pageSize);
  let y = pageSize[1] - 40; // Start position from top
  const x = 50;
  const lineSpacing = 18;

  const checkAndAddNewPage = () => {
    if (y < 40) {
      page = pdfDoc.addPage(pageSize);
      y = pageSize[1] - 60; // Reset Y to top for new page
    }
  };

  const drawText = (text: string, page: PDFPage, x: number, y: number) => {
    page.drawText(text, {
      x: x,
      y: y,
      size: 12,
      font: timesRomanFont,
      color: rgb(0, 0, 0),
    });
  };

  const drawData = (data: any, page: PDFPage, x: number, startY: number) => {
    let localY = startY;
    for (const [key, value] of Object.entries(data)) {
      checkAndAddNewPage();
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          drawText(`${key}:`, page, x, localY);
          localY -= lineSpacing;
          value.forEach((item) => {
            Object.entries(item).forEach(([itemKey, itemValue]) => {
              checkAndAddNewPage();
              drawText(`  ${itemKey}: ${itemValue}`, page, x, localY);
              localY -= lineSpacing;
            });
            localY -= lineSpacing / 2; // Extra spacing between items
          });
        } else {
          drawText(`- ${key}:`, page, x, localY);
          localY -= lineSpacing;
          Object.entries(value).forEach(([itemKey, itemValue]) => {
            checkAndAddNewPage();
            drawText(`  ${itemKey}: ${itemValue}`, page, x, localY);
            localY -= lineSpacing;
          });
        }
      } else {
        drawText(`- ${key}: ${value}`, page, x, localY);
        localY -= lineSpacing;
      }
    }
  };

  drawData(data, page, x, y);

  const pdfBytes = await pdfDoc.save();
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net', // OVH SMTP server
    port: 587, // SMTP port (could be different based on your settings, e.g., 465)
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'noreply@sea-electronics.com', // Your OVH email address
      pass: 'wassimSEA2023', // Your OVH email password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Formulaire 2 " <no-replay@sea-electronics.com>',
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
  // // Example: Uncomment and use this line if you intend to actually send the email
  //await sendEmail(pdfBytes);

  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated-pdf.pdf"',
    },
  });
}
