'use client';

import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/TextInput';
import ImmatriculationInput from './test';
import { useState } from 'react';

export default function Formulaire() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [data, setData] = useState('');


  const fetchData = async (plate: string) => {
    // Example API call, replace URL and options according to your API
    const response = await fetch(
      'https://pro-formulaire-api.app.dismoilya.fr/lyaform/formulaires/32246421-2e17-4f17-89a0-2cda89ab5edf/vehicule/' +
        plate,
      {
        method: 'GET', // or 'POST'
        headers: {
          'Content-Type': 'application/json',
          // Additional headers if required
        },
        // body: JSON.stringify({ plate }), // If you need to send data
      },
    );
    console.log('pffffffffffffff' , response);
    if (response.ok) {

      router.push('/formulaire2/step2');
    }
    return response.json();
  };
  const {  trigger ,watch, setValue } = useAppFormContext();

 
  
  const validateStep = async (plate:string) => {
    console.log('plate' , plate);
    await trigger();
  
      const data = await fetchData(plate); 
     
      setValue('marque', data.marque);
      setValue('modele', data.modele);
      setValue('finition', data.sraCommercial);
      const formattedDate = data.date1erCirFr.split('T')[0];
      setValue('dateName', formattedDate);
      router.push('/formulaire2/step2');
    
  };
  return (
    <div className="flex flex-col space-y-4 w-full">
      <Progress value={10} />
      <div className="flex flex-row text-2xl pt-12 font-bold">
        <p className="flex flex-row  text-2xl pt-12">
          Votre
          <span className="text-red-700 px-1">véhicule</span>
        </p>
      </div>
      <div className="lg:w-2/3 w-full">
        <ImmatriculationInput setError={setError}  setData={setData} />
        {error.length > 0 && <div className="text-red-500 mt-1">{error}</div>}
        <FormActions>
          <div className="flex flex-col lg:flex-row space-x-1">
            <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={() => { 
    if (data.length > 0 && error.length === 0) {
      validateStep(data);
    }
  }}>
              Suivant
            </Button>
            <Button
              type="button"
              variant={'link'}
              size={'sm'}
              className="mt-8 text-blue-800 text-base"
              onClick={() => {
                router.push('/formulaire2/step2');
              }}
            >
              Je ne connais pas l&apos;immatriculation
              <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </FormActions>
      </div>
    </div>
  );
}
