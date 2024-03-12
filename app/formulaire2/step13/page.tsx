'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep12() {
  const router = useRouter();
  const { register, trigger, formState , setValue , watch} = useAppFormContext();

  const { isValid, errors } = formState;

  const conducteur_secondaire = watch('conducteur_secondaire');

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
      router.push("/formulaire/step14");
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row text-2xl pt-12">
      Ajouter 
 <span className="text-red-700 px-1"> un conducteur secondaire ?</span>
</p>


        <div className="flex flex-col space-y-4 mt-6">


     <RadioButtonGroup
            question="Ajouter un conducteur secondaire ?

            "
            name="conducteur_secondaire"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.conducteur_secondaire}
            currentValue={conducteur_secondaire}
          />
        </div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
