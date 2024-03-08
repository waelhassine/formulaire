'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';

import TextInput from '@/components/TextInput';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step7');
    }
  };
  const presence_objet = watch('presence_objet');
  const logement_alarame = watch('logement_alarame');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Caractéristiques spéciales</p>
        <TextInput
          label="Valeur mobilière à assurer"
          name="mobiliere_assurer"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montante' }}
          error={errors.mobiliere_assurer}
          placeholder=""
          maxLength={20}
          onBlur={() => trigger('mobiliere_assurer')}
          autoComplete="mobiliere_assurer"
        />
        <RadioButtonGroup
          question="Présence d’objets de valeur ?"
          name="presence_objet"
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.presence_objet}
          currentValue={presence_objet}
        />
        <RadioButtonGroup
          question="Le logement possède t'il une alarme ?"
          name="logement_alarame"
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.logement_alarame}
          currentValue={logement_alarame}
        />
        <SelectInput
          label="Surface des dépendances"
          name="periode_logement"
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors.periode_logement}
          options={[
            { value: 'Entre_0_et_45_jours', label: 'Entre 0 et 45 jours' },
            { value: 'Entre_45_et_60_jours', label: 'Entre 45 et 60 jours' },
            { value: 'Entre_60_et_90_jours', label: 'Entre 60 et 90 jours' },
            { value: 'Plus_90_jours', label: 'Plus 90 jours' },
          ]}
          placeholder=""
        />
        <div className="flex flex-col space-y-6 mt-6"></div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
