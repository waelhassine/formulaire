'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons'; // Import the icon

type Cardstep8Props = {
  onClose: () => void; // Add a function prop
};

export default function Cardstep8({ onClose }: Cardstep8Props) {
const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step5');
    }
  };
  const contrat_cours = watch('contrat_cours');
  return (
    <div className="w-full max-w-6xl mx-auto"> {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow"> {/* Adjusted padding for larger space inside the card */}
     <div className='flex flex-end justify-end w-full '>
      <button onClick={onClose}  style={{ float: 'left', color: 'red', fontSize: '24px' }} >
  <TrashIcon />
</button></div>



      <SelectInput
          label="Compagnie
          "
          name="Compagnie
"
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.Compagnie
}
options={[
  { value: 'SIMPLE', label: 'SIMPLE' },
  { value: '2MA', label: '2MA' },
  { value: 'ACHEEL', label: 'ACHEEL' },
  { value: 'ACPS', label: 'ACPS' },
  { value: 'ACTEL', label: 'ACTEL' },
  { value: 'ADAM', label: 'ADAM' },
]}
          placeholder=""
        />
 <TextInput
            label="Date de souscription
            "
            name="souscription"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.souscription}
            type = "date"
          />
          <RadioButtonGroup
            question="Le contrat est-il toujours en cours ?

            "
            name="contrat_cours"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.contrat_cours}
            currentValue={contrat_cours}
          />
          {contrat_cours === 'non' && (
            <>
            <TextInput
            label="Date de résiliation

            "
            name="resiliation"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.resiliation}
            type = "date"
          />
            <SelectInput
          label="Motif de résiliation

          "
          name="motif_resiliation
"
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.motif_resiliation
}
options={[
  { value: 'echeance', label: 'A écheance' },
  { value: 'Autre', label: 'Autre' },
  { value: 'Changement_dadress', label: 'Changement d adress' },
]}
          placeholder=""
        />
</>
          )}
      </div>
    </div>
  );
}
