export interface FormValues {
  email: string;
  phone: string;
  adresse: string;
    CRM:number;
    type_permis: string;
    CRM_bonus: number;
    CRM_bonus_Conducteur: number;
    date_permisConducteur: Date;
    date_permis: Date;
    complement: string;
    codepostal: string;
    finition: string;
    modele: string;
    marque: string;
    ville: string;
    pays: string;
    adresseCorrespondance: 'oui' | 'non';
    inventaire: 'oui' | 'non';
    logementDangereuse: 'oui' | 'non';
    logement_garage: 'oui' | 'non';
    logement_sous_sol: 'oui' | 'non';
    presence_dependances: 'oui' | 'non';
    surface_verande: string;
    terrasses: 'oui' | 'non';
    installations_exterieures: 'oui' | 'non';
  
    presence_veranda: 'oui' | 'non';
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
    objet_annulation: 'oui' | 'non';
    conduite_accompagnee: 'oui' | 'non';
    stationnement: string;
    suspension_permis: 'oui' | 'non';
    PrenomIdentité: string;
    deja_assure: 'oui' | 'non';
    CRMConducteur: number;
    type_permisConducteur: string;
    type_relation: string;
    naissance : Date;
    naissanceIdentité : Date;
    type_de_stationnement: string;
    NomIdentité: string;
    deja_assure_secondaire: 'oui' | 'non';
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
  }
  
  export interface CardInfo {
    type_infraction: string;
    nombre_infraction: number;
    moin_de_5_ans: 'oui' | 'non';
  }
  
  export interface sinistre_principal {
    souscription: Date;
    type_sinistre: string;
    nature_sinistre: string;
    taux_responsabilite: string;
  }
  