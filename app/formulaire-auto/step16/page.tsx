'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';

export default function FormulaireStep9() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire-auto/step17');
    }
  };

  const step16_conduite_accompagnee = watch('step16_conduite_accompagnee');
  const step16_suspension_permis = watch('step16_suspension_permis');
  const step16_deja_assure = watch('step16_deja_assure');
  const step16_deja_assure_secondaire = watch('step16_deja_assure_secondaire');
  const setp16_objet_annulation = watch('setp16_objet_annulation');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <button
        className="flex flex-row space-x-2 items-center justify-center mt-6"
        onClick={() => router.push('step15')}
      >
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
          Conducteur <span className="text-red-700 px-1">secondaire</span>
        </p>
        <p className="flex flex-row  text-2xl pt-12">Antécédents d&apos;assurance</p>

        <div className="flex flex-col space-y-6 mt-6">
          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur principal ?"
            name="step16_deja_assure"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step16_deja_assure}
            currentValue={step16_deja_assure}
          />

          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur secondaire ?"
            name="step16_deja_assure_secondaire"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step16_deja_assure_secondaire}
            currentValue={step16_deja_assure_secondaire}
          />
          <RadioButtonGroup
            question="Obtention du permis suite à la conduite accompagnée ?"
            name="step16_conduite_accompagnee"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step16_conduite_accompagnee}
            currentValue={step16_conduite_accompagnee}
            popoverContent="Si vous ne vous en rappelez plus, vous trouverez cette information sur votre permis de conduire (ou sur le permis du conducteur secondaire le cas échéant)."
          />
          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet de suspension(s) ?"
            name="step16_suspension_permis"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step16_suspension_permis}
            currentValue={step16_suspension_permis}
          />

          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet d'annulation(s) ?"
            name="setp16_objet_annulation"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.setp16_objet_annulation}
            currentValue={setp16_objet_annulation}
          />
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
