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
  const { register, trigger, formState, setValue, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const logement_possede = watch('logement_possede');

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
      router.push('/formulaire/step4');
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={30} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step2')}>
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
        <div className="flex lg:flex-row  lg:text-2xl text-lg pt-12 font-bold justify-start items-start">
          Quel est le
          <span className="text-red-700 px-1 font-bold">type de logement</span>à assurer ?
        </div>

        <div className="flex flex-col space-y-4 mt-6">
          <TextInput
            label="Date d'emménagement (facultative)"
            name="dateName"
            register={register}
            validationRules={{}}
            error={errors.dateName}
            type="date"
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
            type="number"
          />

          <TextInput
            label="Nb pièces principales > 9m2"
            name="nb"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.nb}
            placeholder="Nb pièces principales > 9m2"
            type="number"
          />

          <RadioButtonGroup
            question="Le logement possède de grandes pièces (>30m2)"
            name="logement_possede"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.logement_possede}
            currentValue={logement_possede}
          />
          {logement_possede === 'Oui' && (
            <TextInput
              label="Combien ?"
              name="combien"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.combien}
              placeholder="Combien ?"
              type="number"
            />
          )}
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
