"use client";
import clsx from "clsx";
import { Progress } from "@/components/ui/progress";
import useAppFormContext from "@/lib/hooks/useAppFormContext";
import { useRouter } from "next/navigation";
import FormActions from "@/components/FormActions";
import Appartement from "@/components/Appartement";
import Home_etager from "@/components/Home_etager";
import Home_plein from "@/components/Home_plein";
import Mobile_home from "@/components/Mobile_home";
import VehicleForm from '@/components/VehicleForm';
import { Button } from "@/components/ui/button";
import './style.css';
export default function Formulaire() {
  const router = useRouter();
  const { register, trigger, formState } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push("/formulaire2/step2");
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
      <VehicleForm />
      
      <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>


    </div>
  );
}
