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

  const modifications_techniques = watch('modifications_techniques');

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
      router.push("/formulaire/step4");
    }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row text-2xl pt-12">
      Votre 
 <span className="text-red-700 px-1">véhicule</span>
</p>


        <div className="flex flex-col space-y-4 mt-6">

        <TextInput
            label="Date d'achat
            "
            name="dateDachat"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.dateDachat}
            type = "date"
          />


<SelectInput
              label="Type d'achat
              "
              name="type_achat"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.type_achat}
              options={[
                { value: 'COMPTANT', label: 'Comptant' },
                { value: 'Credit', label: 'Crédit' },
                { value: 'Location', label: 'Location avec option d achat ' },
                { value: 'DON', label: 'DON' },

              ]}
              placeholder=""
            />


     <RadioButtonGroup
            question="Le véhicule a-t-il subi des modifications techniques ?
            "
            name="modifications_techniques"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.modifications_techniques}
            currentValue={modifications_techniques}
          />
          <SelectInput
              label="Titulaire de la carte grise
              "
              name="titulaire_carte_grise"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.titulaire_carte_grise}
              options={[
                { value: 'Souscripteur', label: 'Souscripteur' },
                { value: 'Couple', label: 'Couple' },
                { value: 'Conjoint', label: 'Conjoint' },
                { value: 'Assendant', label: 'Assendant' },
                { value: 'Dessendant', label: 'Dessendant' },
                { value: 'societe_leasing', label: 'société de leasing ' },


              ]}
              placeholder=""
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
