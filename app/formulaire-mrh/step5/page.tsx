'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';

import SelectInput from '@/components/SelectWael';

export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire-mrh/step6');
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
      <ProgressHeader val={50} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.back()}>
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
        <p className="flex flex-row  text-2xl pt-12">Caractéristiques spéciales</p>

        <div className="flex flex-col space-y-6 mt-6">
          <RadioButtonGroup
            question="Classé ou inscrit à l’inventaire des monuments historiques ?"
            name="inventaire"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.inventaire}
            currentValue={inventaire}
            popoverContent="Bâtiment classé monument historique ou inscrit à l’inventaire supplémentaire des monuments historiques. Il peut s’agir d’une partie seulement du bâtiment, par exemple la façade."
          />

          <RadioButtonGroup
            question="Votre logement est-il situé à proximité d'un site ou d'une installation dangereuse ?"
            name="logementDangereuse"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
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
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
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
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
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
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.presence_dependances}
            currentValue={presence_dependances}
            popoverContent="Voulez-vous les assurer en dommages ? (i) Si vous souhaitez que vos dépendances soient également garanties en Vol et vandalisme, leurs portes d`accès doivent être équipées au minimum d’une serrure"
          />
          {presence_dependances === 'Oui' && (
            <SelectInput
              label="Surface des dépendances"
              name="surface_des_dépendances"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.surface_des_dépendances}
              options={[
                { value: 'Moins de 50m2', label: 'Moins de 50m2' },
                { value: 'Entre 50 à 100m2', label: 'Entre 50 à 100m2' },
                { value: 'Plus de 100m2', label: 'Plus de 100m2' },
              ]}
              placeholder=""
            />
          )}
          <RadioButtonGroup
            question="Présence d'une véranda ?"
            name="presence_veranda"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.presence_veranda}
            currentValue={presence_veranda}
            popoverContent="Si votre véranda fait plus de 9 m² elle est également à déclarer comme une pièce supplémentaire."
          />
          {presence_veranda === 'Oui' && (
            <SelectInput
              label="Surface de la véranda"
              name="surface_verande"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.surface_verande}
              options={[
                { value: 'Moins de 50m2', label: 'Moins de 50m2' },
                { value: 'Plus de 50m2', label: 'Plus de 50m2' },
              ]}
              placeholder=""
            />
          )}
          <RadioButtonGroup
            question="Présence de terrasses ?"
            name="terrasses"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.terrasses}
            currentValue={terrasses}
          />
          {terrasses === 'Oui' && (
            <SelectInput
              label="Surface des terrasses"
              name="surface_terrasses"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.surface_terrasses}
              options={[
                { value: 'Moins de 50m2', label: 'Moins de 50m2' },
                { value: 'Plus de 50m2', label: 'Plus de 50m2' },
              ]}
              placeholder=""
            />
          )}
          <SelectInput
            label="Type de piscine"
            name="piscine"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.piscine}
            options={[
              { value: 'aucune', label: 'Aucune' },
              { value: 'Piscine intérieure', label: 'Piscine intérieure' },
              { value: 'Piscine extérieure couverte', label: 'Piscine extérieure couverte' },
              { value: 'Piscine extérieure non couverte', label: 'Piscine extérieure non couverte' },
            ]}
            placeholder=""
          />
          <RadioButtonGroup
            question="Présence d’autres installations extérieures (spa…) ?"
            name="installations_exterieures"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.installations_exterieures}
            currentValue={installations_exterieures}
          />
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
