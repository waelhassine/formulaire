'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';

import TextInput from '@/components/TextInput';

export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/plan');
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Caractéristiques spéciales</p>
        <TextInput
          label="Valeur mobilière à assurer"
          name="mobiliere_assurer"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montante' }}
          error={errors.mobiliere_assurer}
          placeholder=""
          maxLength={20}
          onBlur={() => trigger('mobiliere_assurer')}
          autoComplete="mobiliere_assurer"
        />
        <div className="flex flex-col space-y-6 mt-6"></div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
