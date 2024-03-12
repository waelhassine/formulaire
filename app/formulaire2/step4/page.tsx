'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step5');
    }
  };
  const adresseCorrespondance = watch('adresseCorrespondance');
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
        Votre contrat
 <span className="text-red-700 px-1">contrat</span>
        </p>
        <SelectInput
              label="Niveau de couverture souhaité
              "
              name="niveau_couverture"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.niveau_couverture}
              options={[
                { value: 'Tiere', label: 'Tiere +' },
                { value: 'Tiere_plus', label: 'Tiere plus' },
                { value: 'tous_risque', label: 'tous risque' },
              ]}
              placeholder=""
            />
       
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
