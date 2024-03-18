'use client';

import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ImmatriculationInput from '../formulaire2/step1/test';

export default function Formulaire() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (plate: string) => {
    setIsLoading(true && error.length === 0);

    //setIsLoading(true && error.length === 0);
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

    if (!response.ok) {
      router.push('/formulaire2/step2');
    }

    let data;

    try {
      data = await response.json();
    } catch (error) {
      console.error('Error parsing JSON:', error);

      data = null;
    }

    return data;
  };

  const { trigger, setValue } = useAppFormContext();

  const validateStep = async (plate: string) => {
    await trigger();

    const data = await fetchData(plate);

    if (data) {
      setValue('step2_marque', data?.marque);
      setValue('step2_modele', data?.modele);
      setValue('step2_sraCommercial', data?.sraCommercial);
      const formattedDate = data?.date1erCirFr?.split('T')[0];
      setValue('step2_dateName', formattedDate);
    }

    router.push('/formulaire2/step2');
  };

  const handleSuivantClick = () => {
    if (!data.trim()) {
      setError('Champ obligatoire');
    } else if (error.length === 0 && data.length > 0) {
      validateStep(data);
    }
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
      <div className="lg:w-1/3 w-full">
        <ImmatriculationInput setError={setError} setData={setData} />
        {error.length > 0 && <div className="text-red-500 mt-1">{error}</div>}
        <FormActions>
          <div className="flex flex-col lg:flex-row space-x-1">
            <Button
              type="button"
              disabled={isLoading}
              size={'lg'}
              className="mt-8 bg-blue-800 text-xl"
              onClick={handleSuivantClick}
            >
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
