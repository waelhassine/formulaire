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
  presence_veranda: 'oui' | 'non';
  surface_verande: string;
  terrasses: 'oui' | 'non';
  surface_terrasses: string;
  piscine: string;
  installations_exterieures: 'oui' | 'non';
  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
}
