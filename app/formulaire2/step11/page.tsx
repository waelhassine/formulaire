'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Cardstep11 from './Cardstep11';
import { useFieldArray } from 'react-hook-form';
import { sinistre_principal } from '@/types/form';
import FormActions from '@/components/FormActions';

  
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
      name: 'card_sinistre_principal',
    });

    
    const validateStep = async () => {
      const result = await trigger();
      console.log('result', getValues());
      if (result && isValid) {
        router.push('/formulaire/step12');
      }
    };
    
    
    return (
        <div className="w-full">
        <ProgressHeader val={90} />
        <div className="flex flex-col space-y-4 w-2/3">
          <p className="flex flex-row text-2xl pt-12">
          Conducteur 
 
 <span className="text-red-700 px-1">principal</span>
          </p>
          <p className="flex flex-row text-2xl pt-12">
          Le conducteur a t il déclaré des sinistres ?
          </p>
      
          {fields.map((field, index) => (
          <Cardstep11
            key={field.id} 
            index={index}
            onClose={() => remove(index)}
          />
        ))}
         
         <Button type="button" variant="secondary" onClick={() => append({} as sinistre_principal )}>
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
  