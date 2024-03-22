export interface FormValues {
  plate: string;
  //step2
  step2_finition: string;
  step2_modele: string;
  step2_marque: string;
  step2_dateName: undefined | Date;
  step2_sraCommercial: string;
  //step3
  step3_dateDachat: Date;
  step3_type_achat: string;
  step3_modifications_techniques: 'oui' | 'non';
  step3_titulaire_carte_grise: string;
  //step4
  step4_niveau_couverture: string;
  //step5
  step5_type_trajet: string;
  step5_frequence_utilisation: string;
  step5_nb_km: string;
  step5_type_de_stationnement: string;
  step5_type_de_parking_collectif: string;
  //step6
  step6_stationnementstep6: string;
  step6_complementstep6: string;
  step6_villestep6: string;
  step6_postalstep6: string;
  step6_codepostalstationnement: string;
  step6_villestationnement: string;
  //step7
  step7_civilites: 'oui' | 'non';
  step7_prenom: string;
  step7_noms: string;
  step7_naissance: Date;
  //step8
  step8_date_permisConducteur: Date;
  step8_type_permis: string;
  step8_crm_bonusstep8: number;
  //step9
  step9_deja_assure: 'oui' | 'non';
  step9_deja_assure_secondaire: 'oui' | 'non';
  step9_conduite_accompagnee: 'oui' | 'non';
  step9_suspension_permis: 'oui' | 'non';
  step9_objet_annulation: 'oui' | 'non';
  //step10
  step10_card_Conducteur_v2: Conducteur_secondaire[];
  //step11
  step11_card_sinistre_principal: sinistre_principal[];
  //step12
  step12_card_conducteur: CardInfo[];
  //step13
  step13_conducteur_secondaire: 'oui' | 'non';
  //step14
  step14_civiliteIdentité: 'oui' | 'non';
  step14_prenomConducteurSecondaire: string;
  step14_nomConducteurSecondaire: string;
  step14_naissanceIdentité: Date;
  step14_type_relation: string;
  //step15
  step15_date_permisConducteur: Date;
  step15_type_permis: string;
  step15_crm_bonus_Conducteur: number;
  //step16
  step16_deja_assure: 'oui' | 'non';
  step16_deja_assure_secondaire: 'oui' | 'non';
  step16_conduite_accompagnee: 'oui' | 'non';
  step16_suspension_permis: 'oui' | 'non';
  setp16_objet_annulation: 'oui' | 'non';
  //step17
  step17_card_conducteur_infraction: ConducteurInfraction[];
  //step18
  step18_card_conducteur_sinistres: sinistre_principal[];
  //step19
  step19_card_assurance: CardInfo[];
  //step20
  step20_adresse: string;
  step20_codepostal: string;
  step20_ville: string;
  step20_pays: string;
  step20_complément: string;
  step20_consenttwo: Boolean;
  step20_telephone: string;
  step20_email: string;
  step20_nom: string;
  step20_prenom: string;
  step20_civilite: string;
  step20_conducteur_pricipal: 'oui' | 'non';

  /*
// TODO: old data in the form2, we should verify if it's still needed

  plate: string;
  name: string;
  phone: string;
  complement: string;
  ville: string;
  pays: string;
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
  Prenom: string;
  Nom: string;
  Civilite: string;
  addons: {
    online: boolean;
    storage: boolean;
    profi0le: boolean;
  };
  nb: number; //idk
  objet_annulation: 'oui' | 'non';
  conduite_accompagnee: 'oui' | 'non';
  stationnement: string;
  suspension_permis: 'oui' | 'non';
  CRMstep8: number;
  PrenomIdentité: string;
  CRM_bonus: number;
  deja_assure: 'oui' | 'non';
  CRMConducteur: number;
  NomIdentité: string;
  deja_assure_secondaire: 'oui' | 'non';
  date_permis: Date;
  nombre_infraction: number;
  cards: CardInfo[];
  card_conducteur_secondaire: CardInfo[];
  complementstep20: string;*/
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
