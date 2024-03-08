'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { DatePicker } from '@/components/ui/date-picker/date-picker';
import SelectCustom from '@/components/ui/select-custom/select-custom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function StepOne() {
  const router = useRouter();
  const { register, trigger, formState } = useAppFormContext();
  const { isValid, errors } = formState;
  const [date, setDate] =  useState<Date | undefined>(new Date())

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

  const [selectedYear, setSelectedYear] = useState(''); 

  const [showCombien, setShowCombien] = useState(false);

  const [inputValueCombien, setInputValueCombien] = useState<number | undefined>();
  const [inputValueSurface , setInputValueSurface] = useState<number | undefined>();
  const [inputValueNb , setInputValueNb] = useState<number | undefined>();


const handleOuiNonClick = (event : React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()
  setShowCombien(e=> !e);
};
 

 

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/step2');
    }
  };
  return (
    <div className="flex flex-col space-y-4 w-full">

      <div className="flex flex-col mt-6">
   {/* ------------------------------------------------------- */}
  
   <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">
             { `${dateName}`}
            </span>
            {errors.email && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {errors.email.message}
              </span>
            )}
          </div>
      <DatePicker date={date} setDate={setDate} required />
        </label>

      {/* ---------------------------------------------------------- */}  
        <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">Année de construction</span>
            {errors.name && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {errors.name.message}
              </span>
            )}        
          </div>
       <SelectCustom items={year} onSelect={setSelectedYear} placeholder={SelectPlaceHolder} />
        </label>

      {/* ---------------------------------------------------------- */}  
    
      <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide">Surface habitable</span>
            {errors.name && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {errors.name.message}
              </span>
            )}        
          </div>
    
          <Input type='number' value={inputValueSurface} onChange={ (e)=> setInputValueSurface(e.target.value ? parseInt(e.target.value, 10) : undefined)}  />

    
        </label>
      
      {/* ---------------------------------------------------------- */}  
      <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide"> {nb} </span>
            {errors.name && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {errors.name.message}
              </span>
            )}        
          </div>
    
          <Input type='number' value={inputValueNb} onChange={ (e)=> setInputValueNb(e.target.value ? parseInt(e.target.value, 10) : undefined)}  />

    
        </label>

      {/* ---------------------------------------------------------- */}  
      <label className="flex flex-col">
          <div className="flex justify-between">
            <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide"> {longement} </span>
            {errors.name && (
              <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
                {errors.name.message}
              </span>
            )}        
          </div>
    
    <div>
    <Button onClick={handleOuiNonClick}>Oui</Button>

    <Button onClick={handleOuiNonClick}>Non</Button>


{ showCombien && <label className="flex flex-col">
      <div className="flex justify-between">
        <span className="capitalize text-xs text-marine-blue lg:text-sm font-medium tracking-wide"> Combien ? </span>
        {errors.name && (
          <span className="text-xs lg:text-sm font-medium lg:font-bold tracking-wide text-strawberry-red">
            {errors.name.message}
          </span>
        )}        
      </div>

    <Input type='number' value={inputValueCombien} onChange={ (e)=> setInputValueCombien(e.target.value ? parseInt(e.target.value, 10) : undefined)}  />

 

    </label>}

    </div>
      
    
        </label>

        
      {/* ---------------------------------------------------------- */}  

      </div>
      <FormActions>
        <button
          type="button"
          className="bg-marine-blue hover:opacity-80 transition duration-300 text-magnolia ml-auto px-[17px] lg:px-8 py-[10px] lg:py-3 text-sm lg:text-base rounded-[4px] lg:rounded-lg"
          onClick={validateStep}
        >
          Next Step
        </button>
      </FormActions>
    </div>
  );
}
