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
  terrasses: 'oui' | 'non';
  installations_exterieures: 'oui' | 'non';
  presence_objet: 'oui' | 'non';

  plan: 'arcade' | 'advanced' | 'pro';
  billing: 'monthly' | 'yearly';
  location: string;
  presence_veranda: 'oui' | 'non';
  activite: 'oui' | 'non';
  Email: string;
  Telephone: string;
  Prenom: string;
  Nom: string;
  Civilite: string;
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
  dateName: undefined | Date;
  dateDachat: Date;
  nb: number; //idk
  objet_annulation: 'oui' | 'non';
  conduite_accompagnee: 'oui' | 'non';
  stationnement: string;
  suspension_permis: 'oui' | 'non';
  CRM: number;
  CRMstep8: number;
  CRM_bonusstep8: number;
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
  card_conducteur_infraction: ConducteurInfraction[];
  conducteur_pricipal: 'oui' | 'non';
  consenttwo: Boolean;
  stationnementstep6: string;
  complementstep6:string;
  codepostalste6: string;
  villestep6: string;
  Civilitestep7: 'oui' | 'non';
  Prenomstep7: string;
  Nomstep7: string;
  deja_assurestep9: 'oui' | 'non';
  deja_assure_secondairestep9:'oui' | 'non';
  conduite_accompagneestep9: 'oui' | 'non';
  suspension_permisstep9: 'oui' | 'non';
  objet_annulationstep9: 'oui' | 'non';
  deja_assurestep16: 'oui' | 'non';
  deja_assure_secondairestep16: 'oui' | 'non';
  conduite_accompagneestep16: 'oui' | 'non';
  suspension_permisstep16: 'oui' | 'non';
  objet_annulationstep16: 'oui' | 'non';
  complementstep20: string;
}

export interface CardInfo {
  compagnie: string;
  souscription: Date;
  contract_cours: 'oui' | 'non';
  resiliation?: Date;
  motif_resiliation?: string;
  commentaires: string;
  recidive_non_paiement: 'oui' | 'non';
  contentieux_solde: 'oui' | 'non';
}

export interface ConducteurInfraction {
  type_infraction: string;
  nomber_infraction: number;
  Ont_elles_moins_de_5_ans: 'oui' | 'non';
}

export interface sinistre_principal {
  souscription: Date;
  type_sinistre: string;
  nature_sinistre: string;
  taux_responsabilite: string;
}

export interface Conducteur_secondaire {
  type_infraction: string;
  nombre_infraction: number;
  moin_de_5_ans: 'oui' | 'non';
}
