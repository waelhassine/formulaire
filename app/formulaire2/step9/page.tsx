'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
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
      router.push('/formulaire/step10');
    }
  };

  const deja_assure = watch('deja_assure');
  const deja_assure_secondaire = watch('deja_assure_secondaire');
  const conduite_accompagnee = watch('conduite_accompagnee');
  const suspension_permis = watch('suspension_permis');
  const objet_annulation = watch('objet_annulation');
  const presence_veranda = watch('presence_veranda');
  const installations_exterieures = watch('installations_exterieures');
  const terrasses = watch('terrasses');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Conducteur principal
</p>
<p className="flex flex-row  text-2xl pt-12">Antécédents d'assurance

</p>

        <div className="flex flex-col space-y-6 mt-6">
          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur principal ?
            "
            name="deja_assure"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.deja_assure}
            currentValue={deja_assure}
          />

          <RadioButtonGroup
            question="Déjà assuré en tant que conducteur secondaire ?
            "
            name="deja_assure_secondaire"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.deja_assure_secondaire}
            currentValue={deja_assure_secondaire}
          />
          <RadioButtonGroup
            question="Obtention du permis suite à la conduite accompagnée ?
            "
            name="conduite_accompagnee"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.conduite_accompagnee}
            currentValue={conduite_accompagnee}
          />
          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet de suspension(s) ?
"
            name="suspension_permis"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.suspension_permis}
            currentValue={suspension_permis}
          />

          <RadioButtonGroup
            question="Le permis du conducteur principal a-t-il fait l'objet d'annulation(s) ?
            "
            name="objet_annulation"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.objet_annulation}
            currentValue={objet_annulation}
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
