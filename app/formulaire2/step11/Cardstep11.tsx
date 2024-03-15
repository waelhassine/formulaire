'use client';
import clsx from 'clsx';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';

type Cardstep11Props = {
  onClose: () => void;
  index: number;
};

export default function Cardstep11({ onClose, index }: Cardstep11Props) {
  const {
    register,
    formState: { errors },
  } = useAppFormContext();

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>

        <TextInput
          label="Date du sinistre"
          name={`card_sinistre_principal.${index}.souscription`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_sinistre_principal?.[index]?.souscription}
          type="date"
        />
        <SelectInput
          label="Type de sinistre"
          name={`card_sinistre_principal.${index}.type_sinistre`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_sinistre_principal?.[index]?.type_sinistre}
          options={[
            { value: 'Accident', label: 'Accident' },
            { value: 'Bris de glace', label: 'Bris de glace' },
            { value: 'Catastrophe naturelle', label: 'Catastrophe Naturelle' },
            { value: 'Délit de fuite', label: 'Délit de fuite' },
            { value: 'Incendie', label: 'Incendie' },

            { value: 'Vol', label: 'Vol' },

            { value: 'Vandalisme', label: 'Vandalisme' },
            { value: 'Evènement climatique', label: 'Evènement climatique' },
            { value: 'Grêle', label: 'Grêle' },
            { value: 'Sinistre avec tiers', label: 'Sinistre avec tiers' },
            { value: 'Sinistre sans tiers', label: 'Sinistre sans tierss' },
            { value: 'Vandalisme', label: 'Vandalisme' },
            { value: 'Vol du véhicule', label: 'Vol du véhicule' },
          ]}
          placeholder=""
        />
        <SelectInput
          label="Nature du sinistre"
          name={`card_sinistre_principal.${index}.nature_sinistre`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.card_sinistre_principal?.[index]?.nature_sinistre}
          options={[
            { value: 'Corporel', label: 'Corporel' },
            { value: 'Materiel', label: 'Materiel' },
          ]}
          placeholder=""
        />
        <SelectInput
          label="Taux de responsabilité"
          name={`card_sinistre_principal.${index}.taux_responsabilite`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.card_sinistre_principal?.[index]?.taux_responsabilite}
          options={[
            { value: 'zero', label: '0%' },
            { value: 'cinquant', label: '50%' },
            { value: 'cent', label: '100%' },
          ]}
          placeholder=""
        />
      </div>
    </div>
  );
}
