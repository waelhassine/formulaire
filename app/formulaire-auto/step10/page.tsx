'use client';
import clsx from 'clsx';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import Cardstep10 from './Cardstep10';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import FormActions from '@/components/FormActions';
import { Conducteur_secondaire } from '@/types/form2';

export default function FormulaireStep10() {
  const router = useRouter();
  const {
    control,
    formState: { isValid },
    trigger,
  } = useAppFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'step10_card_Conducteur_v2', // This name should match the one in your form's initial state or schema
  });

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire-auto/step11');
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={50} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.back()}>
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
        <p className="flex flex-row text-2xl pt-12">
          Conducteur
          <span className="text-red-700 px-1">principal</span>
        </p>
        <p className="flex flex-row text-2xl pt-12">Le conducteur a t il commis des infractions ?</p>

        {fields.map((field, index) => (
          <Cardstep10
            key={field.id} // React Hook Form uses 'id' for key management in field arrays
            index={index}
            onClose={() => remove(index)}
          />
        ))}

        <Button type="button" variant="secondary" onClick={() => append({} as Conducteur_secondaire)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter une infraction
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
