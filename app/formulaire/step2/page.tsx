'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep3() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push("/formulaire/step3");
    }
  };
  const residence = watch('residence');
  const meuble = watch('meuble');
  const activite = watch('activite');
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
          Quel est le <p className="text-red-700 px-1">type de logement</p> à assurer ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
        <SelectInput
              label="Type d'occupation"
              name="Type d occupation

              "
              register={register}
              validationRules={{ required: 'This field is required' }}
              error={errors.typelocation}
              options={[
                { value: 'Jamais', label: 'Jamais' },
                { value: 'Mois_de_3_moins_paran', label: 'Mois de 3 moins par an' },
                { value: '3_mois_ou_plus_par_an', label: '3 mois ou plus par an' },
                { value: 'propriétaire_occupant', label: 'propriétaire occupant' },
                { value: 'usufruitier', label: 'usufruitier' },

              ]}
              placeholder="Select a type"
            />

        <RadioButtonGroup
            question="Type de résidence
            "
            name="residence"
            options={[
              { value: 'principal', label: 'principal' },
              { value: 'secondaire', label: 'secondaire' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.residence}
            currentValue={residence}
          />

          {residence === 'secondaire' && (
            <SelectInput
              label="Est-il proposé à la location ?
              "
              name="Est-il proposé à la location ?
              "
              register={register}
              validationRules={{ required: 'This field is required' }}
              error={errors.location}
              options={[
                { value: 'Jamais', label: 'Jamais' },
                { value: 'Mois_de_3_moins_paran', label: 'Mois de 3 moins par an' },
                { value: '3_mois_ou_plus_par_an', label: '3 mois ou plus par an' },
              ]}
              placeholder="Select a periode"
            />
          )}


<RadioButtonGroup
            question="Le logement est-il meublé ?            "
            name="meuble"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.meuble}
            currentValue={meuble}
          />

<RadioButtonGroup
            question="Une activité professionnelle est exercée dans le logement            "
            name="activite"
            options={[
              { value: 'ouiac', label: 'Oui' },
              { value: 'nonn', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.activite}
            currentValue={activite}
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
