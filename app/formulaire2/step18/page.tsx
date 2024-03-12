'use client';
import clsx from 'clsx';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Cardstep18 from './Cardstep18';
import { sinistre_principal } from '@/types/form2';
import { useFieldArray } from 'react-hook-form';

   
export default function FormulaireStep10() {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    trigger,
    getValues,
  } = useAppFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'card_conducteur_sinistres',
  });

  
  const validateStep = async () => {
    const result = await trigger();
    console.log('result', getValues());
    if (result && isValid) {
      router.push('/formulaire/step19');
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
          Le conducteur a til déclaré des sinistres ? 
          </p>
          
          {fields.map((field, index) => (
          <Cardstep18
            key={field.id} 
            index={index}
            onClose={() => remove(index)}
          />
        ))}

          <Button type="button" variant="secondary" onClick={() => append({} as sinistre_principal )}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter un Sinistre
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
  