"use client";
import clsx from "clsx";
import { Progress } from "@/components/ui/progress";
import useAppFormContext from "@/lib/hooks/useAppFormContext2";
import { useRouter } from "next/navigation";
import FormActions from "@/components/FormActions";
import Appartement from "@/components/Appartement";
import Home_etager from "@/components/Home_etager";
import Home_plein from "@/components/Home_plein";
import Mobile_home from "@/components/Mobile_home";
import './style.css';
export default function Formulaire() {
  const router = useRouter();
  const { register, trigger, formState } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push("/formulaire/step2");
    }
  };
  return (
<div className="flex flex-col space-y-4 w-2/3">
      <Progress value={10} />
      <div className="flex flex-row text-2xl pt-12 font-bold">
        Quel est le
        <span className="text-red-700 px-1 font-bold">type de logement</span>
        à assurer ?
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div
  className="card bg-white shadow rounded-lg p-4 flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-500"
  onClick={validateStep}
>
          <Appartement />
          <p className="text-2xl pt-12">Appartement</p>
        </div>
         <div
  className="card bg-white shadow rounded-lg p-4 flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-500"
  onClick={validateStep}
>
          <Home_etager />
          <p className="text-2xl pt-12">Maison individuelle à étages</p>
        </div>
         <div
  className="card bg-white shadow rounded-lg p-4 flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-500"
  onClick={validateStep}
>
          <Home_plein />
          <p className="text-2xl pt-12">Maison individuelle plein pied</p>
        </div>
         <div
  className="card bg-white shadow rounded-lg p-4 flex flex-col items-center text-center cursor-pointer border-2 border-transparent hover:border-gray-500"
  onClick={validateStep}
>
          <Mobile_home />
          <p className="text-2xl pt-12">Chalet ou bungalow ou Mobile home</p>
        </div>
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
