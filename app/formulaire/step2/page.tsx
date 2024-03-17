'use client';

import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';

import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep3() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/formulaire/step3');
    }
  };
  const type_logement_assurer = watch('type_logement_assurer');
  const residence = watch('residence');
  const meuble = watch('meuble');
  const activite = watch('activite');
  return (
    <div className="w-full h-full">
      <ProgressHeader val={20} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step1')}>
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
        <div className="flex lg:flex-row  lg:text-2xl text-lg pt-12 font-bold justify-start items-start">
          Quel est le
          <span className="text-red-700 px-1 font-bold">type de logement</span>à assurer ?
        </div>

        <div className="flex flex-col space-y-4 mt-6">
          {type_logement_assurer === 'Appartement' && (
            <>
              <SelectInput
                label="Etage"
                name="etage_appratement"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.etage_appratement}
                options={[
                  { value: 'Rez-de-chaussée', label: 'Rez-de-chaussée' },
                  { value: 'Intermédiare', label: 'Intermédiare' },
                  { value: 'Dernier étage', label: 'Dernier étage' },
                ]}
                placeholder="Sélectionner dans le liste"
              />
            </>
          )}
          <SelectInput
            label="Type d'occupation"
            name="typelocation"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.typelocation}
            options={[
              { value: 'Colocataire', label: 'Colocataire' },
              { value: 'Propriétaire', label: 'Locataire' },
              { value: 'Propriétaire occupant', label: 'Propriétaire occupant' },
              { value: 'Usufruitier', label: 'Usufruitier' },
            ]}
            placeholder="Sélectionner dans le liste"
            popoverContent="Le souscripteur personne morale sera toujours non occupant du bien assuré, qu`il soit locataire ou propriétaire. De ce fait, trois types de qualité d`assuré possibles : • Locataire : la personne morale est locataire du bien et souscrit également une assurance pour le compte de son sous-locataire.  • Propriétaire occupant : la personne morale est propriétaire du bien et souscrit également une assurance pour le compte de son locataire. • Propriétaire non occupant : la personne morale est propriétaire du bien et ne souscrit pas d`assurance pour le compte de son locataire. La personne morale demandera à la personne physique qui occupera le logement de souscrire sa propre assurance habitation. Quelle que soit la qualité de l`assuré, les Besoins Spécifiques `souscription pour le compte du locataire` et `souscription pour le compte du sous-locataire` n`ont pas besoin d`être saisis"
          />

          <RadioButtonGroup
            question="Type de résidence"
            name="residence"
            options={[
              { value: 'Principal', label: 'Principal' },
              { value: 'Secondaire', label: 'Secondaire' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.residence}
            currentValue={residence}
          />

          {residence === 'Secondaire' && (
            <SelectInput
              label="Est-il proposé à la location ?"
              name="location"
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors.location}
              options={[
                { value: 'Jamais', label: 'Jamais' },
                { value: 'Mois de 3 moins paran', label: 'Mois de 3 moins par an' },
                { value: '3 mois ou plus par an', label: '3 mois ou plus par an' },
              ]}
              placeholder="Sélectionner dans le liste"
            />
          )}

          <RadioButtonGroup
            question="Le logement est-il meublé ?            "
            name="meuble"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.meuble}
            currentValue={meuble}
          />

          <RadioButtonGroup
            question="Une activité professionnelle est exercée dans le logement"
            name="activite"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.activite}
            currentValue={activite}
          />

          {/* <TextInput
            label="Surface habitable"
            name="surface"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.surface}
            placeholder="Entrez votre surface"
            type="number"
          /> */}
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
