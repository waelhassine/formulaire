'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext2';

import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';

import TextInput from '@/components/TextInput';

export default function FormulaireStep2() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    console.log('haloo');
    await trigger();
    console.log(isValid);
    if (isValid) {
      console.log(isValid);
      router.push('/formulaire-auto/step3');
    }
  };
  return (
    <div className="w-full">
      <ProgressHeader val={10} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step1')}>
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
          Votre
          <span className="text-red-700 px-1">véhicule</span>
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Quelle est sa marque ?"
                name="step2_marque"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step2_marque}
                placeholder="Entrez votre marque"
                maxLength={40}
                onBlur={() => trigger('step2_marque')}
                autoComplete="step2_marque"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Quel est son modèle ?"
                name="step2_modele"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step2_modele}
                placeholder="Entrez votre modele"
                maxLength={40}
                onBlur={() => trigger('step2_modele')}
                autoComplete="step2_modele"
              />
            </div>
          </div>

          <TextInput
            label="Quelle est sa finition ?"
            name="step2_finition"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step2_finition}
            placeholder="ex: 1.2 PURE TECH 130 STYLE"
            maxLength={40}
            onBlur={() => trigger('step2_finition')}
            autoComplete="step2_finition"
          />

          <TextInput
            label="Quelle est sa date de mise en circulation ?"
            name="step2_dateName"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step2_dateName}
            placeholder="Entrez votre date"
            maxLength={40}
            onBlur={() => trigger('step2_dateName')}
            autoComplete="step2_dateName"
            type="date"
          />
        </div>
        <FormActions>
          <Button
            type="button"
            size={'lg'}
            className="mt-8 bg-blue-800 text-xl  w-full lg:w-1/3"
            onClick={validateStep}
          >
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
