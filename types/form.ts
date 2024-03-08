export interface FormValues {
  name: string;
  email: string;
  phone: string;
  adresse: string;
  complement: string;
  codepostal: string;
  ville: string;
  pays: string;
  adresseCorrespondance: 'oui' | 'non';
  inventaire: 'oui' | 'non';
  logementDangereuse: 'oui' | 'non';
  logement_garage: 'oui' | 'non';
  logement_sous_sol: 'oui' | 'non';
  presence_dependances: 'oui' | 'non';
  surface_des_dépendances: string;
  Systeme_de_chauffage: string;

  surface_verande: string;
  terrasses: 'oui' | 'non';
  surface_terrasses: string;
  piscine: string;
  installations_exterieures: 'oui' | 'non';
  mobiliere_assurer: number;
  presence_objet: 'oui' | 'non';
  logement_alarame: 'oui' | 'non';
  periode_logement: string;

  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
  location:string ;
  typelocation: string;
  nombre_adultes: number;
  nombre_d_enfants_vivant_au_domicile: number;
  presence_d_enfants_18_ans: number;
  presence_veranda: 'oui' | 'non';
  residence: 'principal' | 'secondaire';
  meuble: 'oui' | 'non';
  activite: 'oui' | 'non';
type_chien : 'oui' | 'non';
installation_professionnel: 'oui' | 'non'; 
energies_renouvelables: 'oui' | 'non';
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
  dateName: undefined | Date;
  construction: string;
}
