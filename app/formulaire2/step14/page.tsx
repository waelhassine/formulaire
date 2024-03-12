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
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep13() {
  const router = useRouter();
  const { register, trigger, formState, watch } = useAppFormContext();


  const { isValid, errors } = formState;

 

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step15');
    }
  };
  const CiviliteIdentité = watch('CiviliteIdentité');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row  text-2xl pt-12">
        Conducteur 
 <span className="text-red-700 px-1">secondaire</span>  ?
        </p>
        <p className="flex flex-row  text-2xl pt-12">
        Identité
 
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Civilite
            "
            name="CiviliteIdentité"
            options={[
              { value: 'oui', label: 'Monsieur' },
              { value: 'non', label: 'Madame' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.CiviliteIdentité
            }
            currentValue={CiviliteIdentité}
          />
          <TextInput
            label="Prénom
            "
            name="PrenomIdentité

            "
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.PrenomIdentité}
            placeholder="Entrez votre Prenom"
            maxLength={20}
            onBlur={() => trigger('PrenomIdentité')}
            autoComplete="PrenomIdentité"
          />

 <TextInput
            label="Date de naissance"
            name="naissanceIdentité"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.naissanceIdentité}
            type = "date"
          />

<TextInput
            label="Nom"
            name="NomIdentité"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre Nom"
            maxLength={20}
            onBlur={() => trigger('NomIdentité')}
            autoComplete="NomIdentité"
          />
          <SelectInput
              label="Type de relation avec le conducteur principal


              "
              name="type_relation"
              register={register}
              validationRules={{ required: 'type_relation' }}
              error={errors.type_relation}
              options={[
                { value: 'Aucun_lien_familial', label: 'Aucun lien familial' },
                { value: 'Enfant', label: 'Enfant' },

                { value: 'Parent', label: 'Parent' },
                { value: 'Conjoint', label: 'Conjoint' },
                


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
