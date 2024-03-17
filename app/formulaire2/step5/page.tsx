'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';

import SelectInput from '@/components/SelectWael';

export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire2/step6');
    }
  };

  const type_de_stationnement = watch('step5_type_de_stationnement');
  return (
    <div className="w-full">
      <ProgressHeader val={60} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step4')}>
        <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="text-lg">Précédent</p>
      </button>

      <div className="flex flex-col space-y-4 lg:w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
          Utilisation de <span className="text-red-700 px-1">votre véhicule</span>
        </p>

        <div className="flex flex-col space-y-6 mt-6">
          <SelectInput
            label="Type de trajet"
            name="step5_type_trajet"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step5_type_trajet}
            options={[
              { value: 'Privés et travail', label: 'Privés et travail' },
              { value: 'Privé exclusivement', label: 'Privé exclusivement' },
              { value: 'Privé et professionnel', label: 'Privé et professionnel' },
              { value: 'Tournées régulières', label: 'Tournées régulières' },
            ]}
            placeholder="Sélectionner dans le liste"
            popoverContent="Usage privé et trajet travail : ''usage privé'' et aller-retour du domicile au lieu de travail.
            Usage privé et professionnel : ''usage privé'' et trajet travail, et déplacements professionnels occasionnels.
            Tournées régulières : vos déplacements comportent plusieurs destinations successives, se renouvelant à fréquence régulière (visite de clientèle,livraisons...)."
          />

          <SelectInput
            label="Fréquence d'utilisation"
            name="step5_frequence_utilisation"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step5_frequence_utilisation}
            options={[
              { value: 'Presque tous les jours', label: 'Presque tous les jours' },
              { value: '3/4 jours par semaine', label: '3/4 jours par semaine' },
              { value: 'Moins de 1 par  semaine', label: 'Moins de 1 par  semaine' },
              { value: 'Le weekend et les vacances', label: 'Le week-end et les vacances' },
            ]}
            placeholder="Sélectionner dans le liste"
          />
          <SelectInput
            label="Nombre de km parcourus par an"
            name="step5_nb_km"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step5_nb_km}
            options={[
              { value: '- de 5000 km ', label: '- de 5000 km ' },
              { value: '- de 10 000 km', label: '- de 10 000 km' },
              { value: '+ de 10 000 km', label: '+ de 10 000 km' },
            ]}
            placeholder="Sélectionner dans le liste"
          />

          <SelectInput
            label="Type de stationnement"
            name="step5_type_de_stationnement"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step5_type_de_stationnement}
            options={[
              { value: 'Parking collectif clos', label: 'Parking collectif clos' },
              { value: 'Parking individuel', label: 'Parking individuel' },
              { value: 'Voie public', label: 'Voie public' },
            ]}
            placeholder="Sélectionner dans le liste"
          />
          {type_de_stationnement === 'Parking individuel' || type_de_stationnement === 'Parking collectif clos' ? (
            <>
              {type_de_stationnement === 'Parking collectif clos' ? (
                <SelectInput
                  label="Veuillez préciser le type de parking collectif"
                  name="step5_type_de_parking_collectif"
                  register={register}
                  validationRules={{ required: 'Champ obligatoire' }}
                  error={errors.step5_type_de_parking_collectif}
                  options={[
                    { value: 'En plein air', label: 'En plein air' },
                    { value: 'Couvert et surveillé', label: 'Couvert et surveillé' },
                    { value: 'Couvert non surveillé', label: 'Couvert non surveillé' },
                  ]}
                  placeholder="Sélectionner dans le liste"
                />
              ) : (
                <SelectInput
                  label="Veuillez préciser le type de parking collectif"
                  name="step5_type_de_parking_collectif"
                  register={register}
                  validationRules={{ required: 'Champ obligatoire' }}
                  error={errors.step5_type_de_parking_collectif}
                  options={[
                    { value: 'jardin clos', label: 'jardin clos' },
                    { value: 'Garage fermé/Box', label: 'Garage fermé/Box' },
                  ]}
                  placeholder="Sélectionner dans le liste"
                />
              )}
            </>
          ) : null}
        </div>
        <FormActions>
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl w-full lg:w-1/3" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
