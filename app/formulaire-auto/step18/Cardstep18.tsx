'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';

type Cardstep18Props = {
  onClose: () => void; // Add a function prop
  index: number;
};

export default function Cardstep18({ onClose, index }: Cardstep18Props) {
  const {
    register,
    formState: { errors },
  } = useAppFormContext();

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        {' '}
        {/* Adjusted padding for larger space inside the card */}
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>
        <TextInput
          label="Date de sinistres
            "
          name={`step18_card_conducteur_sinistres.${index}.souscriptionstep18`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step18_card_conducteur_sinistres?.[index]?.souscriptionstep18}
          type="date"
        />
        <SelectInput
          label="Type de sinistre

          "
          name={`step18_card_conducteur_sinistres.${index}.type_sinistrestep18`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step18_card_conducteur_sinistres?.[index]?.type_sinistrestep18}
          options={[
            { value: 'Accident', label: 'Accident' },
            { value: 'Bris de glace', label: 'Bris de glace' },
            { value: 'Catastrophe naturel', label: 'Catastrophe naturel' },
            { value: 'Délit de fruite', label: 'Délit de fruite' },
            { value: 'Incendie', label: 'Incendie' },

            { value: 'Vol', label: 'Vol' },

            { value: 'Vandalisme', label: 'Vandalisme' },
            { value: 'Evenment Climatique', label: 'Evenment climatique' },
            { value: 'gréle', label: 'gréle' },
            { value: 'sinistre avec tiers', label: 'Sinistre avec tiers' },
            { value: 'sinistre sans tiers', label: 'Sinistre sans tiers' },
          ]}
          placeholder=""
        />
        <SelectInput
          label="Nature du sinistre

          "
          name={`step18_card_conducteur_sinistres.${index}.nature_sinistrestep18`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.step18_card_conducteur_sinistres?.[index]?.nature_sinistrestep18}
          options={[
            { value: 'Corporel', label: 'Corporel' },
            { value: 'Material', label: 'Material' },
          ]}
          placeholder=""
        />
        <SelectInput
          label="Taux de responsabilité

          "
          name={`step18_card_conducteur_sinistres.${index}.taux_responsabilitestep18`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.step18_card_conducteur_sinistres?.[index]?.taux_responsabilitestep18}
          options={[
            { value: 'zero', label: '0%' },
            { value: 'cinquant', label: '%50' },
            { value: 'cent', label: '100%' },
          ]}
          placeholder=""
        />
      </div>
    </div>
  );
}
