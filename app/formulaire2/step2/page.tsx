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
import SelectInput from '@/components/SelectWael';
import TextInput from '@/components/TextInput';

export default function FormulaireStep2() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire2/step3');
    }
  };
  const adresseCorrespondance = watch('adresseCorrespondance');
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

      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
          Votre
          <span className="text-red-700 px-1">véhicule</span>
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex flex-row space-x-3  w-full ">
            <div className="w-1/2">
              <TextInput
                label="Quelle est sa marque ?
                "
                name="marque"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.marque}
                placeholder="Entrez votre marque"
                maxLength={20}
                onBlur={() => trigger('marque')}
                autoComplete="marque"
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Quel est son modèle ?
                "
                name="modele"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.modele}
                placeholder="Entrez votre modele"
                maxLength={20}
                onBlur={() => trigger('modele')}
                autoComplete="modele"
              />
            </div>
          </div>

          <TextInput
            label="Quelle est sa finition ?
            "
            name="finition"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.finition}
            placeholder="ex: 1.2 PURE TECH 130 STYLE"
            maxLength={20}
            onBlur={() => trigger('finition')}
            autoComplete="finition"
          />

          <TextInput
            label="Quelle est sa date de première mise en circulation ?
            "
            name="dateName"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.dateName}
            placeholder="Entrez votre date"
            maxLength={20}
            onBlur={() => trigger('dateName')}
            autoComplete="dateName"
          />
        </div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
