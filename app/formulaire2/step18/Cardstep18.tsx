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
  index : number;

};

export default function Cardstep18({ onClose , index }: Cardstep18Props) {
  const { register, formState: { errors } } = useAppFormContext();

  return (
    <div className="w-full max-w-6xl mx-auto"> {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow"> {/* Adjusted padding for larger space inside the card */}
     <div className='flex flex-end justify-end w-full '>
      <button onClick={onClose}  style={{ float: 'left', color: 'red', fontSize: '24px' }} >
  <TrashIcon />
</button></div>


<TextInput
            label="Date de souscription
            "
            name={`card_conducteur_sinistres.${index}.souscription` }
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors?.card_conducteur_sinistres?.[index]?.souscription}
            type = "date"
          />
      <SelectInput
          label="Type de sinistre

          "
          name={`card_conducteur_sinistres.${index}.type_sinistre` }

          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_conducteur_sinistres?.[index]?.type_sinistre}
options={[
  { value: 'Accident', label: 'Accident' },
  { value: 'Bris_de_glace', label: 'Bris_de_glace' },
  { value: 'catastrophe_naturel', label: 'catastrophe_naturel' },
  { value: 'Délit de fruite', label: 'Délit de fruite' },
  { value: 'Incendie', label: 'Incendie' },

  { value: 'Vol', label: 'Vol' },

  { value: 'Vandalisme', label: 'Vandalisme'},
  {value:'Evenment_climatique',label:'Evenment climatique'},
  {value:'gréle',label:'gréle'},
{value:'sinistre_avec_tiers',label:'sinistre avec tiers'},
{value:'sinistre_sans_tiers',label:'sinistre sans tiers'},
]}


          placeholder=""
        />
   <SelectInput
          label="Nature du sinistre

          "
          name={`card_conducteur_sinistres.${index}.nature_sinistre` }

          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.card_conducteur_sinistres?.[index]?.nature_sinistre
          }

options={[
  { value: 'corporel', label: 'corporel' },
  { value: 'Material', label: 'Material' },
]}
          placeholder=""
        />
          <SelectInput
          label="Taux de responsabilité

          "
          name={`card_conducteur_sinistres.${index}.taux_responsabilite` }
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.card_conducteur_sinistres?.[index]?.taux_responsabilite}

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
