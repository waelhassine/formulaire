'use client';

import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/TextInput';

export default function Formulaire() {
  const router = useRouter();
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
    if (!response.ok) {
      router.push('/formulaire2/step2');
    }
    return response.json();
  };
  const { register, trigger, formState, watch, setValue } = useAppFormContext();

  const { isValid, errors } = formState;
  const plate = watch('plate');
  const validateStep = async () => {
    console.log(plate);
    await trigger();
    if (isValid) {
      const data = await fetchData(plate); // Fetch data from API
      console.log(data);
      setValue('marque', data.marque);
      setValue('modele', data.modele);
      setValue('finition', data.sraCommercial);
      const formattedDate = data.date1erCirFr.split('T')[0];
      setValue('dateName', formattedDate);
      router.push('/formulaire2/step2');
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
      <div className="lg:w-2/3 w-full">
        <TextInput
          label="Quel est son numéro d'immatriculation ?
                "
          name="plate"
          register={register}
          validationRules={{
            pattern: {
              value: /^(([A-Z]{2}-\d{3}-[A-Z]{2})|(\d{3}-[A-Z]{3}-\d{2}))$/, // French car plate regex pattern
              message: 'L immatriculation doit être sous la forme AB-123-CD (ou 123-ABC-45 avant 2009).',
            },
          }}
          error={errors.plate}
          placeholder="AA - AAA - AAA"
          maxLength={35}
          onBlur={() => trigger('plate')}
          autoComplete="plate"
        />

        <FormActions>
          <div className="flex flex-col lg:flex-row space-x-1">
            <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
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
