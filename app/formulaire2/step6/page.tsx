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

export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch, getValues } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire2/step7');
    }
  };
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
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
        <p className="flex flex-row  text-2xl pt-12">
          Stationnement de
          <span className="text-red-700 px-1">votre véhicule</span>
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <TextInput
            label="Voie de stationnement"
            name="step6_stationnementstep6"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step6_stationnementstep6}
            placeholder="Entrez votre stationnement"
            maxLength={40}
            onBlur={() => trigger('step6_stationnementstep6')}
            autoComplete="step6_stationnementstep6"
          />
          <TextInput
            label="Complément"
            name="step6_complementstep6"
            register={register}
            validationRules={{}}
            error={errors.step6_complementstep6}
            placeholder="Entrez votre complément"
            maxLength={40}
            onBlur={() => trigger('step6_complementstep6')}
            autoComplete="step6_complementstep6"
          />

          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Code postal"
                name="step6_complementstep6"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_complementstep6}
                placeholder="Entrez votre Code postal"
                maxLength={40}
                onBlur={() => trigger('step6_complementstep6')}
                autoComplete="step6_complementstep6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville"
                name="step6_villestep6"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_villestep6}
                placeholder="Entrez votre Ville"
                maxLength={40}
                onBlur={() => trigger('step6_villestep6')}
                autoComplete="step6_villestep6"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Code Postal de stationnement au travail"
                name="step6_codepostalstationnement"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_codepostalstationnement}
                placeholder="Entrez votre Code postal"
                maxLength={40}
                onBlur={() => trigger('step6_codepostalstationnement')}
                autoComplete="step6_codepostalstationnement"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville de stationnement au travail"
                name="step6_villestationnement"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_villestationnement}
                placeholder="Entrez votre Ville"
                maxLength={40}
                onBlur={() => trigger('step6_villestationnement')}
                autoComplete="step6_villestationnement"
              />
            </div>
          </div>
        </div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl w-full lg:w-1/3" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
