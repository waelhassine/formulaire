export interface FormValues {
  plate: string;
  name: string;
  email: string;
  phone: string;
  adresse: string;
  complement: string;
  codepostal: string;
  finition: string;
  modele: string;
  marque: string;
  ville: string;
  pays: string;
  type_de_parking_collectif: string;
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
  location: string;
  typelocation: string;
  nombre_adultes: number;
  nombre_d_enfants_vivant_au_domicile: number;
  presence_d_enfants_18_ans: number;
  presence_veranda: 'oui' | 'non';
  residence: 'principal' | 'secondaire';
  meuble: 'oui' | 'non';
  activite: 'oui' | 'non';
  type_chien: 'oui' | 'non';
  Email: string;
  Telephone: string;
  Prenom: string;
  Nom: string;
  installation_professionnel: 'oui' | 'non';
  energies_renouvelables: 'oui' | 'non';
  Civilite: string;
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
  dateName: undefined | Date;
  construction: string;
  dateDachat: Date;
  surface: number;
  nb: number;
  logement_possede: 'oui' | 'non';
  objet_annulation: 'oui' | 'non';
  conduite_accompagnee: 'oui' | 'non';
  stationnement: string;
  suspension_permis: 'oui' | 'non';
  CRM: number;
  combien: number;
  type_permis: string;
  PrenomIdentité: string;
  CRM_bonus: number;
  deja_assure: 'oui' | 'non';
  CRM_bonus_Conducteur: number;
  date_permisConducteur: Date;
  CRMConducteur: number;
  type_permisConducteur: string;
  type_relation: string;
  naissance: Date;
  naissanceIdentité: Date;
  type_de_stationnement: string;
  NomIdentité: string;
  deja_assure_secondaire: 'oui' | 'non';
  date_permis: Date;
  nb_km: number;
  nombre_infraction: number;
  type_trajet: string;
  CiviliteIdentité: 'oui' | 'non';
  niveau_couverture: string;
  frequence_utilisation: string;
  conducteur_secondaire: 'oui' | 'non';
  modifications_techniques: 'oui' | 'non';
  titulaire_carte_grise: string;
  type_achat: string;

  cards: CardInfo[];
  card_sinistre_principal: sinistre_principal[];
  card_conducteur: CardInfo[];
  card_conducteur_secondaire: CardInfo[];
  card_assurance: CardInfo[];
  card_conducteur_sinistres: sinistre_principal[];
  card_Conducteur_v2: Conducteur_secondaire[];
  conducteur_pricipal: 'oui' | 'non';
  consenttwo: Boolean;
}

export interface CardInfo {
  compagnie: string;
  souscription: Date;
  contract_cours: 'oui' | 'non';
  resiliation?: Date;
  motif_resiliation?: string;
  commentaires: string;
}

export interface sinistre_principal {
  souscription: Date;
  type_sinistre: string;
  nature_sinistre: string;
  taux_responsabilite: string;
}


export interface Conducteur_secondaire{
 type_infraction: string;
 nombre_infraction: number;
moin_de_5_ans: 'oui' | 'non';

}