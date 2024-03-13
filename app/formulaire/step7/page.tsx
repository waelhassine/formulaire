'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep7() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step8');
    }
  };
  const energies_renouvelables = watch('energies_renouvelables');
  const type_chien = watch('type_chien');
  const installation_professionnel = watch('installation_professionnel');
  const nombre_d_enfants_vivant_au_domicile = watch('nombre_d_enfants_vivant_au_domicile');
  return (
    <div className="w-full">
      <ProgressHeader val={70} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step6')}>
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

        <div className="flex flex-col space-y-4 mt-6">
          <TextInput
            label="Nombre d'adultes vivant au domicile "
            name="nombre_d_adultes_vivant_au_domicile"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.nombre_adultes}
            placeholder="Entrez un numero"
            maxLength={20}
            type="number"
            onBlur={() => trigger('nombre_adultes')}
            autoComplete="nombre_adultes"
          />
          <TextInput
            label="Nombre d’enfants vivant au domicile
            "
            name="nombre_d_enfants_vivant_au_domicile"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            type="number"
            placeholder="Entrez votre numero"
            maxLength={20}
            onBlur={() => trigger('nombre_d_enfants_vivant_au_domicile')}
            autoComplete="nombre_d_enfants_vivant_au_domicile"
          />
          {nombre_d_enfants_vivant_au_domicile > 0 && (
            <>
              <TextInput
                label="Présence d'enfants > 18 ans"
                name="presence_d_enfants_18_ans"
                register={register}
                type="number"
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.presence_d_enfants_18_ans}
                placeholder="Entrez votre numero"
                maxLength={20}
                onBlur={() => trigger('presence_d_enfants_18_ans')}
                autoComplete="presence_d_enfants_18_ans"
              />
            </>
          )}

          <RadioButtonGroup
            question="Chien(s) de catégorie 1 ou 2
            "
            name="type_chien"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.type_chien}
            currentValue={type_chien}
          />
          <SelectInput
            label="Systeme de chauffage
              "
            name="systeme_de_chauffage"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.Systeme_de_chauffage}
            options={[
              { value: 'gaz_fuel_elect', label: 'Gaz / Fuel / Electricité' },
              { value: 'Poele_à_Bois', label: 'Poele à Bois' },
              { value: 'cheminee_ouvert', label: 'Cheminée à foyer ouvert' },
              { value: 'cheminee_ferme', label: 'Cheminée à foyer fermé' },
            ]}
            placeholder=""
          />
          <RadioButtonGroup
            question="Son installation a été faite par un professionnel ?
            "
            name="installation_professionnel"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.installation_professionnel}
            currentValue={installation_professionnel}
          />
          <RadioButtonGroup
            question="Présence d'énergies renouvelables ?
            "
            name="energies_renouvelables"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.energies_renouvelables}
            currentValue={energies_renouvelables}
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
