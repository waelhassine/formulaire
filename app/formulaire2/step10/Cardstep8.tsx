'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons'; // Import the icon

type Cardstep8Props = {
  onClose: () => void;
  index : number;
};

export default function Cardstep8({ onClose , index }: Cardstep8Props) {

  const { register, formState: { errors }, watch } = useAppFormContext();
  const contratCours = watch(`cards.${index}.contract_cours`);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>

<SelectInput
          label="Compagnie"
          name={`cards.${index}.compagnie`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.cards?.[index]?.compagnie}
          options={[
            { value: 'SIMPLE', label: 'SIMPLE' },
            { value: '2MA', label: '2MA' },
            { value: 'ACHEEL', label: 'ACHEEL' },
            { value: 'ACPS', label: 'ACPS' },
            { value: 'ACTEL', label: 'ACTEL' },
            { value: 'ADAM', label: 'ADAM' },
          ]}
        />

<TextInput
          label="Date de souscription"
          name={`cards.${index}.souscription`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.cards?.[index]?.souscription}
          type="date"
        />

          <RadioButtonGroup
          question="Le contrat est-il toujours en cours ?"
          name={`cards.${index}.contract_cours`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.cards?.[index]?.contract_cours}
          currentValue={contratCours}
        />
        
          {contratCours === 'non' && (
            <>
            <TextInput
              label="Date de résiliation"
              name={`cards.${index}.resiliation`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.cards?.[index]?.resiliation}
              type="date"
            />

<SelectInput
              label="Motif de résiliation"
              name={`cards.${index}.motif_resiliation`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.cards?.[index]?.motif_resiliation}
              options={[
                { value: 'echeance', label: 'A écheance' },
                { value: 'Autre', label: 'Autre' },
                { value: 'Changement_dadress', label: 'Changement d adress' },
              ]}
            />
</>
          )}
      </div>
    </div>
  );
}
