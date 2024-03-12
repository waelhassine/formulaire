'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';

import SelectInput from '@/components/SelectWael';
import TextInput from '@/components/TextInput';

export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step6');
    }
  };

  const inventaire = watch('inventaire');
  const logementDangereuse = watch('logementDangereuse');
  const logement_garage = watch('logement_garage');
  const logement_sous_sol = watch('logement_sous_sol');
  const presence_dependances = watch('presence_dependances');
  const presence_veranda = watch('presence_veranda');
  const installations_exterieures = watch('installations_exterieures');
  const terrasses = watch('terrasses');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">Utilisation de votre véhicule
</p>

        <div className="flex flex-col space-y-6 mt-6">
            <SelectInput
              label="Type de trajet
              "
              name="type_trajet"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.type_trajet}
              options={[
                { value: 'Prive_et_travail', label: 'Privé et travail' },
                { value: 'Prive_exclusivement', label: 'Prive_exclusivement' },
                { value: 'Prive_et_professionnel', label: 'Prive_et_professionnel' },
                { value: 'Tournées régulières', label: 'Tournées_régulières' },
              ]}
              placeholder=""
            />
         
            <SelectInput
              label="Fréquence d'utilisation
              "
              name="frequence_utilisation"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.frequence_utilisation}
              options={[
                { value: 'presque_tous_les_jours', label: 'Presque tous les jours' },
                { value: 'troissurquatre', label: '3/4 jours par semaine' },
                { value: 'moins_de_un', label: 'Moins de 1 par  semaine' },
                { value: 'le_weekend_et_le_vacance', label: 'Le weekend et les vacances' },


              ]}
              placeholder=""
            />
                    <TextInput
          label="Nombre de km parcourus par an
          "
          name="nb_km"
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montante' }}
          error={errors.nb_km}
          placeholder=""
          maxLength={20}
          onBlur={() => trigger('nb_km')}
          autoComplete="nb_km"
        />
            <SelectInput
              label="Type de stationnement

              "
              name="type_de_stationnement"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.type_de_stationnement}
              options={[
                { value: 'presque_tous_les_jours', label: 'Presque tous les jours' },
                { value: 'troissurquatre', label: '3/4 jours par semaine' },
                { value: 'moins_de_un', label: 'Moins de 1 par  semaine' },
                { value: 'le_weekend_et_le_vacance', label: 'Le weekend et les vacances' },


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
