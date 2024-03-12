'use client';
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
import { useState } from 'react';

export default function FormulaireStep7() {
  const router = useRouter();
  const { register, trigger, formState, watch } = useAppFormContext();


  const { isValid, errors } = formState;

 

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step8');
    }
  };
  const Civilite = watch('Civilite');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
        Conducteur principal
 
 <span className="text-red-700 px-1">principal</span>  ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Civilite
            "
            name="Civilite"
            options={[
              { value: 'oui', label: 'Monsieur' },
              { value: 'non', label: 'Madame' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.Civilite
            }
            currentValue={Civilite}
          />
          <TextInput
            label="Prénom
            "
            name="Prenom
            "
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre Prenom"
            maxLength={20}
            onBlur={() => trigger('Prenom')}
            autoComplete="Prenom"
          />



<TextInput
            label="Nom"
            name="Nom"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre Nom"
            maxLength={20}
            onBlur={() => trigger('Nom')}
            autoComplete="Nom"
          />
           <TextInput
            label="Date de naissance"
            name="naissance"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.naissance}
            type = "date"
          />
          </div>
         
        </div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
  );
}
