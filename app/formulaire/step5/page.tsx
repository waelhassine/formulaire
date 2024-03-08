'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/plan');
    }
  };

  const inventaire = watch('inventaire');
  const logementDangereuse = watch('logementDangereuse');
  const logement_garage = watch('logement_garage');
  const logement_sous_sol = watch('logement_sous_sol');
  const presence_dependances = watch('presence_dependances');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Caractéristiques spéciales</p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Classé ou inscrit à l’inventaire des monuments historiques ?"
            name="inventaire"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.inventaire}
            currentValue={inventaire}
          />

          <RadioButtonGroup
            question="Votre logement est-il situé à proximité d'un site ou d'une installation dangereuse ?"
            name="logementDangereuse"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.logementDangereuse}
            currentValue={logementDangereuse}
          />
          <RadioButtonGroup
            question="Le logement possède t'il un garage ?"
            name="logement_garage"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.logement_garage}
            currentValue={logement_garage}
          />
          <RadioButtonGroup
            question="Le logement possède t'il un sous-sol ?"
            name="logement_sous_sol"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.logement_sous_sol}
            currentValue={logement_sous_sol}
          />

          <RadioButtonGroup
            question="Présence de dépendances ?"
            name="presence_dependances"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.presence_dependances}
            currentValue={presence_dependances}
          />
          {presence_dependances === 'oui' && (
            <SelectInput
              label="Surface des dépendances"
              name="Surface des dépendances"
              register={register}
              validationRules={{ required: 'This field is required' }}
              error={errors.surface_des_dépendances}
              options={[
                { value: 'less_50', label: 'Moins de 50m2' },
                { value: 'between_50_100', label: 'Entre 50 à 100m2' },
                { value: 'more_100', label: 'Plus de 100m2' },
              ]}
              placeholder="Select a country"
            />
          )}
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
