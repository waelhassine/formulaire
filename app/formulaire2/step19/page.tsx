'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Cardstep19 from './Cardstep19';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { CardInfo } from '@/types/form';

 
  
export default function FormulaireStep19() {
    
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    trigger,
    getValues,
  } = useAppFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'card_assurance', // This name should match the one in your form's initial state or schema
  });

  const validateStep = async () => {
    console.log('data', getValues());
    const result = await trigger();
    console.log('data' , getValues());

    if (result && isValid) {
      router.push('/formulaire/step20');
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
          <Cardstep19
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
  