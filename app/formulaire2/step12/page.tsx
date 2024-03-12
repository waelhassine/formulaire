'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Cardstep12 from './Cardstep12';
import { useFieldArray } from 'react-hook-form';
import FormActions from '@/components/FormActions';
import { CardInfo } from '@/types/form';

  
export default function FormulaireStep8() {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    trigger,
    getValues,
  } = useAppFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'card_conducteur', // This name should match the one in your form's initial state or schema
  });
  
  const validateStep = async () => {
    const result = await trigger();
    console.log('data' , getValues());

    if (result && isValid) {
      router.push('/formulaire/step13');
    }
  };
    
    return (
        <div className="w-full">
        <ProgressHeader val={90} />
        <div className="flex flex-col space-y-4 w-2/3">
          <p className="flex flex-row text-2xl pt-12">
          Conducteur 
 <span className="text-red-700 px-1">secondaire</span>
          </p>
          <p className="flex flex-row text-2xl pt-12">
          Antécédents dassurance
          </p>

          {fields.map((field, index) => (
          <Cardstep12
            key={field.id} // React Hook Form uses 'id' for key management in field arrays
            index={index}
            onClose={() => remove(index)}
          />
        ))}
          
          <Button type="button" variant="secondary" onClick={() => append({} as CardInfo)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter un antécédent
        </Button>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
        </div>
      </div>
    );
  }
  