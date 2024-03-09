'use client';
import clsx from 'clsx';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import SelectInput from '@/components/SelectWael';
import { DatePicker } from '@/components/ui/date-picker/date-picker';
import { useState } from 'react';

export default function FormulaireStep3() {
  const router = useRouter();
  const { register, trigger, formState  ,  getValues , setValue} = useAppFormContext();
  const { isValid, errors } = formState;
  const [date, setDate] =  useState< Date | undefined>(new Date())

  const dateName = "Date d'emménagement (facultative)"
  const SelectPlaceHolder = 'Sélectionner dans la liste' 
  const nb = 'Nb pièces principales > 9m2'
  const longement = 'Nb pièces principales < 9m2'
  const year = [
    { value: 'Plus de 30 ans', label: 'Plus de 30 ans' },
    { value: 'Entre 10 et 30 ans', label: 'Entre 10 et 30 ans' },
    { value: 'Entre 5 et 10 ans', label: 'Entre 5 et 10 ans' },
    { value: 'Moins de 5 ans', label: 'Moins de 5 ans' },
    { value: 'En construction', label: 'En construction' },

  ];



const setDataCalender = (date:  undefined | Date) => {
  setDate(date);
  setValue('dateName', date);
}
 

  const validateStep = async () => {
    console.log(getValues( 'dateName') , isValid)
    await trigger();
    if (isValid) {
      router.push("/formulaire/step4");
    }
  };
  return (
    <div className="flex flex-col space-y-4 w-full">

      <div className="flex flex-col mt-6">
   <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">
             { `${dateName}`}
            </span>
            {errors.dateName && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {'required'}
              </span>
            )}
          </div>
    <DatePicker date={date} setDate={setDataCalender} required />
        </label>
      {/* ---------------------------------------------------------- */}  
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


      {/* ---------------------------------------------------------- */}  
    
    

    

      </div>
      <FormActions>
      <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
      </FormActions>
    </div>
  );
}
