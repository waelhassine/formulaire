'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep3() {
  const router = useRouter();
  const { register, trigger, formState , setValue , watch} = useAppFormContext();

  const { isValid, errors } = formState;

  const CRM = watch('CRM');

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
      router.push("/formulaire/step9");
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row text-2xl pt-12">
      Conducteur 
 
 <span className="text-red-700 px-1">principal Permis
</span>
</p>


        <div className="flex flex-col space-y-4 mt-6">

        <TextInput
            label="Date d'obtention du permis de conduire

            "
            name="date_permis"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.date_permis}
            type = "date"
          />


<SelectInput
              label="Type de permis

              "
              name="type_permis"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.type_permis}
              options={[
                { value: 'Permis_B', label: 'Permis B' },
                { value: 'permis_etranger_dans_UE', label: 'Permis étranger dans l UE' },

                { value: 'permis_etranger_hors_UE', label: 'Permis étranger hors UE' },

              ]}
              placeholder=""
            />

<TextInput
          label="Coefficient de Bonus/Malus (CRM)

          "
          name="CRM"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montante' }}
          error={errors.CRM}
          placeholder=""
          maxLength={20}
          onBlur={() => trigger('CRM')}
          autoComplete="CRM"
        />
        {CRM <= 0.5 && (
          <TextInput
          label="Coefficient de Bonus/Malus (CRM)

          "
          name="CRM_bonus"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montante' }}
          error={errors.CRM_bonus}
          placeholder=""
          maxLength={20}
          onBlur={() => trigger('CRM_bonus')}
          autoComplete="CRM_bonus"
        />        )}
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
