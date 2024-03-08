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
  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
}
