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
  const contract_coursstep19 = watch(`step19_card_assurance.${index}.contract_coursstep19`);
  const contentieux_solde = watch(`step19_card_assurance.${index}.contentieux_soldestep19`);
  const recidive_non_paiementstep19 = watch(`step19_card_assurance.${index}.recidive_non_paiementstep19`);
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
          name={`step19_card_assurance.${index}.compagniestep19`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.compagniestep19}
          options={selectedData}
          placeholder=""
        />
        <TextInput
          label="Date de souscription"
          name={`step19_card_assurance.${index}.souscriptionstep19`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.souscriptionstep19}
          type="date"
        />
        <RadioButtonGroup
          question="Le contrat est-il toujours en cours ?"
          name={`step19_card_assurance.${index}.contract_coursstep19`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step19_card_assurance?.[index]?.contract_coursstep19}
          currentValue={contract_coursstep19}
        />
        {contract_coursstep19 === 'non' && (
          <>
            <TextInput
              label="Date de résiliation

            "
              name={`step19_card_assurance.${index}.resiliationstep19`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.resiliationstep19}
              type="date"
            />
            <SelectInput
              label="Motif de résiliation"
              name={`step19_card_assurance.${index}.motif_resiliationstep19`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.motif_resiliationstep19}
              options={[
                { value: 'echeance', label: 'A écheance' },
                { value: 'Autre', label: 'Autre' },
                { value: 'Changement_dadress', label: 'Changement d adress' },
              ]}
              placeholder=""
            />
            <RadioButtonGroup
              question="Y a-t-il eu récidive de non paiement ?"
              name={`step19_card_assurance.${index}.recidive_non_paiementstep19`}
              options={[
                { value: 'oui', label: 'Oui' },
                { value: 'non', label: 'Non' },
              ]}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.recidive_non_paiementstep19}
              currentValue={recidive_non_paiementstep19}
            />
            <RadioButtonGroup
              question="Le contentieux a-t-il été soldé ?"
              name={`step19_card_assurance.${index}.contentieux_soldestep19`}
              options={[
                { value: 'oui', label: 'Oui' },
                { value: 'non', label: 'Non' },
              ]}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step19_card_assurance?.[index]?.contentieux_soldestep19}
              currentValue={contentieux_solde}
            />
            <TextInput
              label="Commentaires"
              name={`step19_card_assurance.${index}.commentairesstep19`}
              register={register}
              validationRules={{}}
              error={errors?.step19_card_assurance?.[index]?.commentairesstep19}
              type="textarea"
            />
          </>
        )}
      </div>
    </div>
  );
}
