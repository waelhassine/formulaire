'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';

import SelectInput from '@/components/SelectWael';

export default function FormulaireStep9() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire2/step10');
    }
  };

  const deja_assurestep9 = watch('deja_assurestep9');
  const deja_assure_secondairestep9 = watch('deja_assure_secondairestep9');
  const conduite_accompagneestep9 = watch('conduite_accompagneestep9');
  const suspension_permis = watch('suspension_permis');
  const objet_annulation = watch('objet_annulation');
  const presence_veranda = watch('presence_veranda');
  const installations_exterieures = watch('installations_exterieures');
  const terrasses = watch('terrasses');
  const suspension_permisstep9 = watch('suspension_permisstep9');
  const objet_annulationstep9 = watch('objet_annulationstep9');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step8')}>
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
          Conducteur <span className="text-red-700 px-1">principal</span>
        </p>
        <p className="flex flex-row  text-2xl pt-12">Antécédents d&apos;assurance</p>

        <div className="flex flex-col space-y-6 mt-6">
          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur principal ?
            "
            name="deja_assurestep9"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.deja_assurestep9}
            currentValue={deja_assurestep9}
          />

          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur secondaire ?
            "
            name="deja_assure_secondairestep9"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.deja_assure_secondairestep9}
            currentValue={deja_assure_secondairestep9}
          />
          <RadioButtonGroup
            question="Obtention du permis suite à la conduite accompagnée ?
            "
            name="conduite_accompagneestep9"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.conduite_accompagneestep9}
            currentValue={conduite_accompagneestep9}
          />
          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet de suspension(s) ?
"
            name="suspension_permisstep9"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.suspension_permisstep9}
            currentValue={suspension_permisstep9}
          />

          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet d'annulation(s) ?
            "
            name="objet_annulationstep9"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.objet_annulationstep9}
            currentValue={objet_annulationstep9}
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
