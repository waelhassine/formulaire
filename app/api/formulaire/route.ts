// import sendEmail from '@/lib/send_email';
import { NextRequest } from 'next/server';
import { PDFDocument, rgb, PDFPage, StandardFonts } from 'pdf-lib';
import nodemailer from 'nodemailer';

interface KeyMapping {
  [key: string]: string;
}

const keyMapping: KeyMapping = {
  plate: 'Quel est son numéro d immatriculation ?',
  step2_marque: 'Quelle est sa marque ?',
  step2_modele: 'Quel est son modèle ?',
  step2_finition: 'Quelle est sa finition ?',
  step2_dateName: 'Quelle est sa date de mise en circulation ?',
  step3_dateDachat: 'Date d achat',
  step3_type_achat: 'Type d achat',
  step3_modifications_techniques: 'Le véhicule a-t-il subi des modifications techniques ?',
  step3_titulaire_carte_grise: 'Titulaire de la carte grise',
  step4_niveau_couverture: 'Niveau de couverture souhaité',
  step5_type_trajet: 'Type de trajet',
  step5_frequence_utilisation: 'Fréquence d utilisation',
  step5_nb_km: 'Nombre de km parcourus par an',
  step5_type_de_stationnement: 'Type de stationnement',
  step5_type_de_parking_collectif: 'Veuillez préciser le type de parking collectif',
  step6_stationnementstep6: 'Voie de stationnement',
  step6_complementstep6: 'Complément',
  step6_codepostalstationnement: 'Code postal',
  step6_villestationnement: 'Ville',
  step7_civilites: 'Civilite',
  step7_prenom: 'Prénom',
  step7_noms: 'Nom',
  step7_naissance: 'Date de naissance',
  step8_date_permisConducteur: 'Date d obtention du permis de conduire',
  step8_type_permis: 'Type de permis',
  step8_crm_bonusstep8: 'Coefficient de Bonus/Malus (CRM)',
  //CRM_bonusstep8: 'Nombre d année(s) à 0.5',
  step9_deja_assure: 'Déjà assuré en tant que conducteur principal ?',
  step9_deja_assure_secondaire: 'Déjà assuré en tant que conducteur secondaire ?',
  step9_conduite_accompagnee: 'Obtention du permis suite à la conduite accompagnée ?',
  step9_suspension_permis: 'Le permis du conducteur principal a-t-il fait l objet de suspension(s) ?',
  step9_objet_annulation: 'Le permis du conducteur principal a-t-il fait l objet d annulation(s) ?',
  //step10
  step10_card_Conducteur_v2: 'Le conducteur a t il commis des infractions ?',
  step11_step11_card_sinistre_principal: 'Le conducteur a t il déclaré des sinistres ?',
  step12_card_conducteur: 'Antécédents d&apos;assurance',
  step13_conducteur_secondaire: 'un conducteur secondaire ?',
  step14_civiliteIdentité: 'Civilite',
  step14_prenomConducteurSecondaire: 'Prénom du conducteur secondaire',
  step14_nomConducteurSecondaire: 'Nom du conducteur secondaire',
  step14_naissanceIdentité: 'Date de naissance identité',

  step15_date_permisConducteur: 'Date d obtention du permis de Conducteur',
  step15_type_permis: 'Type de permis de Conducteur',
  //CRMConducteur: 'Coefficient de Bonus/Malus (CRM)',
  step15_crm_bonus_Conducteur: 'Coefficient de Bonus/Malus (CRM) de Conducteur',
  step16_deja_assure: 'Déjà assuré en tant que conducteur principal ?',
  step16_deja_assure_secondaire: 'Déjà assuré en tant que conducteur secondaire ?',
  step16_conduite_accompagnee: 'Obtention du permis suite à la conduite accompagnée ?',
  step16_suspension_permis: 'Le permis du conducteur principal a-t-il fait l objet de suspension(s) ?',
  setp16_objet_annulation: 'Le permis du conducteur principal a-t-il fait l objet d annulation(s) ?',
  step17_card_conducteur_infraction: 'Le conducteur a t il commis des infractions ?',
  step18_card_conducteur_sinistres: 'Le conducteur a til déclaré des sinistres ?',
  step19_card_assurance: 'Antécédents dassurance',
  step20_conducteur_pricipal: 'Conducteur principal de souscripteur du contrat',
  step20_civilite: 'Civilite de souscripteur du contrat',
  step20_prenom: 'Prénom de souscripteur du contrat',
  step20_nom: 'Nom de souscripteur du contrat',
  step20_email: 'Email de souscripteur du contrat',
  step20_telephone: 'Téléphone de souscripteur du contrat',
  step20_adresse: 'Adresse de souscripteur du contrat',
  step20_complément: 'Complément de souscripteur du contrat',
  step20_codepostal: 'Code postal de souscripteur du contrat',
  step20_ville: 'Ville de souscripteur du contrat',
  step20_pays: 'Pays de souscripteur du contrat',
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
