// import sendEmail from '@/lib/send_email';
import { NextRequest } from 'next/server';
import { PDFDocument, rgb, PDFPage, StandardFonts } from 'pdf-lib';
import sendEmail from '@/lib/send_email';

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
  step6_postalstep6: 'Code postal',
  step6_villestep6: 'Ville',
  step6_codepostalstationnement: 'Code Postal de stationnement au travail',
  step6_villestationnement: 'Ville de stationnement au travail ',
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
  step11_card_sinistre_principal: 'Le conducteur a t il déclaré des sinistres ?',
  step12_card_conducteur: 'Antécédents d`assurance',
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
  step20_consenttwo :  "J'accepte le stockage et le traitement de mes données personnelles",
  // related values 

  // step 10
  type_infraction: "Type d'infraction",
  nombre_infraction: "Nombre d'infraction",
  moin_de_5_ans: "A-t-elle eu lieu il y a moins de 5 ans ?" ,

  // step 11
  souscription:'Date du sinistre' ,
  type_sinistre: 'Type de sinistre' ,
  nature_sinistre: 'Nature du sinistre' ,
  taux_responsabilite: 'Taux de responsabilité',

  // step12
  Compagnie:"compagnie",
 // souscription:"Date de souscription",
  contract_cours:"Le contrat est-il toujours en cours ?",
  resiliation:"Date de résiliation",
  motif_resiliation:"motif_resiliation",
  recidive_non_paiement:"Y a-t-il eu récidive de non paiement ?",
  contentieux_solde:"Le contentieux a-t-il été soldé ?",
  commentaires:"commentaires",
  
};

function transformData(data: any): any {
  if (Array.isArray(data)) {
    return data.map((item) => transformData(item));
  }
  if (typeof data === 'object' && data !== null) {
    const newData: { [key: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      const trimmedKey = key.trim(); // Trim the key
      let newKey = keyMapping[trimmedKey] || trimmedKey; // Map keys based on trimmed version

      // Check for specific handling of 'cards' or similar structures
      if (newKey === 'step10_card_Conducteur_v2' || newKey === 'step11_card_sinistre_principal' || newKey === 'step12_card_conducteur' || newKey ==='step17_card_conducteur_infraction'  || newKey === 'step18_card_conducteur_sinistres' || newKey === 'step19_card_assurance') {
        newData[newKey] = transformCards( value as any[]); // Use transformCards for 'cards'
      } else {
        newData[newKey] = transformData(value); // Recursively apply transformation for other keys/values
      }
    }
    return newData;
  }
  return data; // Return data as is if it's neither an array nor an object
}

function transformCards(cards: any[]): any[] {
  return cards.map((card) => {
    const newCard: { [key: string]: any } = {};
    for (const cardKey of Object.keys(card)) {
      const trimmedCardKey = cardKey.trim(); // Trim the card key
      const mappedCardKey = keyMapping[trimmedCardKey] || trimmedCardKey; // Map card keys based on trimmed version
      newCard[mappedCardKey] = transformData(card[cardKey]); // Apply transformation to card data
    }
    return newCard;
  });
}

export async function POST(request: NextRequest) {
  const originalData = await request.json();
  console.log(originalData);
  const data = transformData(originalData); // Transform the incoming JSON data

  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const pageSize: [number, number] = [595, 1700];
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
  await sendEmail(pdfBytes, 'Formulaire auto ', originalData.step20_nom, originalData.step20_prenom);
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
