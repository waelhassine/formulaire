'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import Cardstep17 from './Cardstep17';
import FormActions from '@/components/FormActions';
import { ConducteurInfraction } from '@/types/form2';
import { useFieldArray } from 'react-hook-form';

export default function FormulaireStep17() {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    trigger,
  } = useAppFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'step17_card_conducteur_infraction',
  });

  const validateStep = async () => {
    const result = await trigger();

    if (result && isValid) {
      router.push('/formulaire2/step18');
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={90} />
      <div className="flex flex-col space-y-4 lg:w-2/3">
        <p className="flex flex-row text-2xl pt-12">
          Conducteur
          <span className="text-red-700 px-1">secondaire</span>
        </p>
        <p className="flex flex-row text-2xl pt-12">Le conducteur a t il commis des infractions ?</p>
        {fields.map((field, index) => (
          <Cardstep17
            key={field.id} // React Hook Form uses 'id' for key management in field arrays
            index={index}
            onClose={() => remove(index)}
          />
        ))}

        <Button type="button" variant="secondary" onClick={() => append({} as ConducteurInfraction)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter un antécédent
        </Button>

        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl w-full lg:w-1/3" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
