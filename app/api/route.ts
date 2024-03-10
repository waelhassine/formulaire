import sendEmail from '@/lib/send_email';
import { NextRequest } from 'next/server';
import { PDFDocument, rgb, PDFPage } from 'pdf-lib';

const keyMapping = {
  ville: 'Ville',
  adresse: 'Adresse',
  complement: 'Complément',
  codepostal: 'Code Postal',
  pays: 'Pays',
  type_logement_assurer: 'Type de Logement à Assurer',
  typelocation: "Type d'Occupation",
  residence: 'Type de Résidence',
  location: 'Proposé à la Location',
  meuble: 'Meublé',
  activite: 'Activité Professionnelle Exercée',
  dateName: "Date d'Emménagement",
  construction: 'Année de Construction',
  surface: 'Surface Habitable',
  nb: 'Nombre de Pièces Principales > 9m²',
  logement_possede: 'Logement avec Grandes Pièces (>30m²)',
  combien: 'Combien de Grandes Pièces',
  adresseCorrespondance: 'Adresse Correspondance avec Souscripteur',
  inventaire: 'Classé ou Inscrit à l’Inventaire des Monuments Historiques',
  logementDangereuse: 'Proximité Site ou Installation Dangereuse',
  logement_garage: 'Possède un Garage',
  logement_sous_sol: 'Possède un Sous-Sol',
  presence_dependances: 'Présence de Dépendances',
  presence_veranda: 'Présence d’une Véranda',
  terrasses: 'Présence de Terrasses',
  piscine: 'Type de Piscine',
  installations_exterieures: 'Installations Extérieures (Spa, etc.)',
  surface_des_dépendances: 'Surface des Dépendances',
  mobiliere_assurer: 'Valeur Mobilière à Assurer',
  presence_objet: 'Présence d’Objets de Valeur',
  logement_alarame: 'Logement avec Alarme',
  periode_logement: 'Période d’Inoccupation du Logement',
  nombre_d_adultes_vivant_au_domicile: 'Nombre d’Adultes Vivant au Domicile',
  nombre_d_enfants_vivant_au_domicile: 'Nombre d’Enfants Vivant au Domicile',
  presence_d_enfants_18_ans: 'Présence d’Enfants > 18 ans',
  type_chien: 'Chien(s) de Catégorie 1 ou 2',
  systeme_de_chauffage: 'Système de Chauffage',
  installation_professionnel: 'Installation Faite par un Professionnel',
  energies_renouvelables: 'Présence d’Énergies Renouvelables',
  cards: 'Antécédents d’Assurance',
  Civilite: 'Civilité',
  Prenom: 'Prénom', // Note: Spaces will be trimmed
  Nom: 'Nom',
  Email: 'Email',
  Telephone: 'Téléphone',
  // Additional fields from your description
  etage_appratement: 'Étage Appartement',
  surface_verande: 'Surface de la Véranda',
  surface_terrasses: 'Surface des Terrasses',
};

function transformData(data: any): any {
  if (Array.isArray(data)) {
    return data.map((item) => transformData(item));
  }
  if (typeof data === 'object' && data !== null) {
    const newData = {};
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
  const data = transformData(originalData); // Transform the incoming JSON data

  const pdfDoc = await PDFDocument.create();
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
      size: 10,
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
          drawText(`${key}:`, page, x, localY);
          localY -= lineSpacing;
          Object.entries(value).forEach(([itemKey, itemValue]) => {
            checkAndAddNewPage();
            drawText(`  ${itemKey}: ${itemValue}`, page, x, localY);
            localY -= lineSpacing;
          });
        }
      } else {
        drawText(`${key}: ${value}`, page, x, localY);
        localY -= lineSpacing;
      }
    }
  };

  drawData(data, page, x, y);

  const pdfBytes = await pdfDoc.save();

  // Example: Uncomment and use this line if you intend to actually send the email
  await sendEmail(pdfBytes);

  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="generated-pdf.pdf"',
    },
  });
}
