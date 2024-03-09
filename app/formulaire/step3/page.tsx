'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep3() {
  const router = useRouter();
  const { register, trigger, formState , setValue , watch} = useAppFormContext();

  const { isValid, errors } = formState;

  const logement_possede = watch('logement_possede');

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row text-2xl pt-12">
  Quel est le <span className="text-red-700 px-1">type de logement</span> à assurer ?
</p>


        <div className="flex flex-col space-y-4 mt-6">

        <TextInput
            label="Date d'emménagement (facultative)"
            name="dateName"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.dateName}
            type = "date"
          />

        <SelectInput
            label="Année de construction"
            name="construction"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.construction}
            options={[
              { value: 'Plus de 30 ans', label: 'Plus de 30 ans' },
              { value: 'Entre 10 et 30 ans', label: 'Entre 10 et 30 ans' },
              { value: 'Entre 5 et 10 ans', label: 'Entre 5 et 10 ans' },
              { value: 'Moins de 5 ans', label: 'Moins de 5 ans' },
              { value: 'En construction', label: 'En construction' },
            ]}
            placeholder="Sélectionner dans la liste"
          />

        <TextInput
            label="Surface habitable"
            name="surface"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.surface}
            placeholder="Entrez votre surface"
            type = "number"
          />

       <TextInput
            label="Nb pièces principales > 9m2"
            name="nb"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.nb}
            placeholder="Nb pièces principales > 9m2"
            type = "number"
          />

     <RadioButtonGroup
            question="Le logement possède de grandes pièces (>30m2)"
            name="logement_possede"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.logement_possede}
            currentValue={logement_possede}
          />
          {logement_possede === 'oui' && (
                 <TextInput
                 label="Combien ?"
                 name="combien"
                 register={register}
                 validationRules={{ required: 'Champ obligatoire' }}
                 error={errors.nb}
                 placeholder="Combien ?"
                 type = "number"
               />
          )}

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
