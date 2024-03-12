'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
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
        <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step18')}>
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
  