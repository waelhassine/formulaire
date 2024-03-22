'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';

export default function FormulaireStep7() {
  const router = useRouter();
  const { register, trigger, formState, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire-auto/step8');
    }
  };
  const step7_civilites = watch('step7_civilites');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step6')}>
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
        <p className="flex flex-row  text-2xl pt-12">
          Conducteur
          <span className="text-red-700 px-1">principal</span> ?
        </p>
        <p className="flex flex-row  text-2xl pt-6">Identité</p>
        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Civilite"
            name="step7_civilites"
            options={[
              { value: 'Monsieur', label: 'Monsieur' },
              { value: 'Madame', label: 'Madame' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step7_civilites}
            currentValue={step7_civilites}
          />
          <TextInput
            label="Prénom"
            name="step7_prenom"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step7_prenom}
            placeholder="Entrez votre Prénom"
            maxLength={30}
            onBlur={() => trigger('step7_prenom')}
            autoComplete="step7_Prenom"
          />

          <TextInput
            label="Nom"
            name="step7_noms"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step7_noms}
            placeholder="Entrez votre Nom"
            maxLength={30}
            onBlur={() => trigger('step7_noms')}
            autoComplete="step7_noms"
          />
          <TextInput
            label="Date de naissance"
            name="step7_naissance"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step7_naissance}
            type="date"
          />
        </div>
      </div>
      <FormActions>
        <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl w-full lg:w-1/3" onClick={validateStep}>
          Suivant
        </Button>
      </FormActions>
    </div>
  );
}
