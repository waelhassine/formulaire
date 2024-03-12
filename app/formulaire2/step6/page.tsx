'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';

export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step8');
    }
  };
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
      <p className="flex flex-row  text-2xl pt-12">
      stationnement de stationnement de 
 <span className="text-red-700 px-1">votre véhicule</span> 
        </p>     

        <div className="flex flex-col space-y-4 mt-6">
     

          <TextInput
            label="Voie de stationnement
"
            name="Voie_de_stationnement
"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.stationnement}
            placeholder="Entrez votre stationnement"
            maxLength={20}
            onBlur={() => trigger('stationnement')}
            autoComplete="stationnement"
          />
          <TextInput
            label="Complément"
            name="complement"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.complement}
            placeholder="Entrez votre complément"
            maxLength={20}
            onBlur={() => trigger('complement')}
            autoComplete="complement"
          />

          <div className="flex flex-row space-x-3  w-full ">
            <div className="w-1/2">
              <TextInput
                label="Code postal"
                name="codepostal"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.codepostal}
                placeholder="Entrez votre Code postal"
                maxLength={20}
                onBlur={() => trigger('codepostal')}
                autoComplete="codepostal"
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Ville"
                name="ville"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.ville}
                placeholder="Entrez votre Ville"
                maxLength={20}
                onBlur={() => trigger('ville')}
                autoComplete="ville"
              />
            </div>
          </div>
      
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
