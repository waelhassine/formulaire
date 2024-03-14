'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import Appartement from '@/components/Appartement';
import Home_etager from '@/components/Home_etager';
import Home_plein from '@/components/Home_plein';
import Mobile_home from '@/components/Mobile_home';
export default function Formulaire() {
  const router = useRouter();
  const { register, trigger, formState, setValue } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async (message: string) => {
    setValue('type_logement_assurer', message);
    router.push('/formulaire/step2');
  };
  return (
    <div className="flex flex-col space-y-4 w-full">
      <Progress value={10} />
      <div className="flex lg:flex-row  lg:text-2xl text-lg pt-12 font-bold justify-start items-start">
        Quel est le
        <span className="text-red-700 px-1 font-bold">type de logement</span>à assurer ?
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-2/3">
        <div
          className="card bg-white shadow rounded-lg p-6 flex flex-col items-center text-center cursor-pointer border border-gray-950 border-transparent hover:border-blue-700 hover:text-blue-700 "
          onClick={() => {
            validateStep('Appartement');
          }}
        >
          <Appartement />
          <p className="text-lg pt-12">Appartement</p>
        </div>
        <div
          className="card bg-white shadow rounded-lg p-6 flex flex-col items-center text-center cursor-pointer border border-gray-950 border-transparent hover:border-blue-700 hover:text-blue-700 "
          onClick={() => validateStep('Maison individuelle à étages')}
        >
          <Home_etager />
          <p className="text-lg pt-12">Maison individuelle à étages</p>
        </div>
        <div
          className="card bg-white shadow rounded-lg p-6 flex flex-col items-center text-center cursor-pointer border border-gray-950 border-transparent hover:border-blue-700 hover:text-blue-700 "
          onClick={() => validateStep('Maison individuelle plein pied')}
        >
          <Home_plein />
          <p className="text-lg pt-12">Maison individuelle plein pied</p>
        </div>
        <div
          className="card bg-white shadow rounded-lg p-6 flex flex-col items-center text-center cursor-pointer border border-gray-950 border-transparent hover:border-blue-700 hover:text-blue-700 "
          onClick={() => validateStep('Chalet ou bungalow ou Mobile home')}
        >
          <Mobile_home />
          <p className="text-lg pt-12">Chalet ou bungalow ou Mobile home</p>
        </div>
      </div>
    </div>
  );
}
