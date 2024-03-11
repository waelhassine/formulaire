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
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step5')}>
        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-lg">Précédent</p>
      </button>
      <div className="flex flex-col space-y-4 lg:w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Caractéristiques spéciales</p>
        <TextInput
          label="Valeur mobilière à assurer"
          name="mobiliere_assurer"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montant' }}
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
          popoverContent="Bijoux et métal précieux dont la valeur unitaire est supérieure à 300 €, tout bien mobilier d’une valeur unitaire supérieure à 8000 € indexés, collections et ensembles dont la valeur globale est supérieure à 16000 €"
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
