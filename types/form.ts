export interface FormValues {
  type_logement_assurer: string;
  etage_appratement: string;
  typelocation: string;
  residence: 'Principal' | 'Secondaire';
  location: string;
  meuble: 'Oui' | 'Non';
  activite: 'Oui' | 'Non';
  dateName: undefined | Date;
  construction: string;
  surface: number;
  nb: number;
  logement_possede: 'Oui' | 'Non';
  combien: number;
  adresseCorrespondance: 'Oui' | 'Non';
  adresse: string;
  complement: string;
  codepostal: string;
  ville: string;
  pays: string;

  inventaire: 'Oui' | 'Non';
  logementDangereuse: 'Oui' | 'Non';
  logement_garage: 'Oui' | 'Non';
  logement_sous_sol: 'Oui' | 'Non';
  presence_dependances: 'Oui' | 'Non';
  surface_des_dépendances: string;
  presence_veranda: 'Oui' | 'Non';
  surface_verande: string;
  terrasses: 'Oui' | 'Non';
  surface_terrasses: string;
  piscine: string;
  installations_exterieures: 'Oui' | 'Non';
  mobiliere_assurer: number;

  presence_objet: 'Oui' | 'Non';
  objets_valeur: number;
  logement_alarame: 'Oui' | 'Non';
  periode_logement: string;
  nombre_adultes: number;
  nombre_d_enfants_vivant_au_domicile: number;
  presence_d_enfants_18_ans: number;
  assurance_scolaire: 'Oui' | 'Non';
  type_chien: 'Oui' | 'Non';
  Systeme_de_chauffage: string;
  autre_preciser: string;
  installation_professionnel: 'Oui' | 'Non';
  energies_renouvelables: 'Oui' | 'Non';
  precision_installation_energie: Array<string>[];
  pompe_a_chaleur: 'Oui' | 'Non';
  Civilite: string;
  Prenom: string;
  Nom: string;
  date_de_naissance: Date;
  Email: string;
  Telephone: string;
  name: string;
  email: string;
  phone: string;

  cards: CardInfo[];

  contrat_cours: 'Oui' | 'Non';

  naissance: Date;
  resiliation: Date;
  motif_resiliation: string;
  consent: Boolean;
}

export interface CardInfo {
  compagnie: string;
  souscription: Date;
  cotisation?: number;//ilyess
  contract_cours: 'Oui' | 'Non';
  resiliation?: Date;
  motif_resiliation?: string;
  commentaires: string;
}
