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
import SelectInput from '@/components/SelectWael';

export default function FormulaireStep7() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step5');
    }
  };
  const energies_renouvelables = watch('energies_renouvelables');
  const type_chien = watch('type_chien');
  const installation_professionnel = watch('installation_professionnel');
  return (
    <div className="w-full">
      <ProgressHeader val={70} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
        Caractéristiques spéciales
        </p>

        <div className="flex flex-col space-y-4 mt-6">

          <TextInput
            label="Nombre d'adultes vivant au domicile
            "
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

          <TextInput
            label="Présence d'enfants > 18 ans
            "
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
          <Button type="button" size={'lg'} className="mt-8 bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
