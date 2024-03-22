'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext2';

import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';
import { selectedData } from './data';
type Cardstep17Props = {
  onClose: () => void;
  index: number;
};

export default function Cardstep17({ onClose, index }: Cardstep17Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useAppFormContext();
  const contratCours = watch(`step19_card_assurance.${index}.contract_cours`);
  const contentieux_solde = watch(`step19_card_assurance.${index}.contentieux_solde`);
  const recidive_non_paiement = watch(`step19_card_assurance.${index}.recidive_non_paiement`);
  return (
    <div className="w-full max-w-6xl mx-auto">
      {' '}
      {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        {' '}
        {/* Adjusted padding for larger space inside the card */}
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>
        <SelectInput
          label="Compagnie"
          name={`step19_card_assurance.${index}.compagnie`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.compagnie}
          options={selectedData}
          placeholder=""
        />
        <TextInput
          label="Date de souscription"
          name={`step19_card_assurance.${index}.souscription`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.souscription}
          type="date"
        />
        <RadioButtonGroup
          question="Le contrat est-il toujours en cours ?"
          name={`step19_card_assurance.${index}.contract_cours`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.contract_cours}
          currentValue={contratCours}
        />
        {contratCours === 'non' && (
          <>
            <TextInput
              label="Date de résiliation

            "
              name={`step19_card_assurance.${index}.resiliation`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.resiliation}
              type="date"
            />
            <SelectInput
              label="Motif de résiliation"
              name={`step19_card_assurance.${index}.motif_resiliation`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.motif_resiliation}
              options={[
                { value: 'echeance', label: 'A écheance' },
                { value: 'Autre', label: 'Autre' },
                { value: 'Changement_dadress', label: 'Changement d adress' },
              ]}
              placeholder=""
            />
            <RadioButtonGroup
              question="Y a-t-il eu récidive de non paiement ?"
              name={`step19_card_assurance.${index}.recidive_non_paiement`}
              options={[
                { value: 'oui', label: 'Oui' },
                { value: 'non', label: 'Non' },
              ]}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.recidive_non_paiement}
              currentValue={recidive_non_paiement}
            />
            <RadioButtonGroup
              question="Le contentieux a-t-il été soldé ?"
              name={`step19_card_assurance.${index}.contentieux_solde`}
              options={[
                { value: 'oui', label: 'Oui' },
                { value: 'non', label: 'Non' },
              ]}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.contentieux_solde}
              currentValue={contentieux_solde}
            />
            <TextInput
              label="Commentaires"
              name={`step19_card_assurance.${index}.commentaires`}
              register={register}
              validationRules={{}}
              error={errors?.step19_card_assurance?.[index]?.commentaires}
              type="textarea"
            />
          </>
        )}
      </div>
    </div>
  );
}