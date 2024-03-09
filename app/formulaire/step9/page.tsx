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

export default function FormulaireStep9() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step9');
    }
  };
  const Civilite = watch('Civilite');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
        Coordonnées 
 <p className="text-red-700 px-1">du souscripteur du contrat</p>  ?
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
            label="Email"
            name="Email"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre Email"
            maxLength={20}
            onBlur={() => trigger('Email')}
            autoComplete="Email"
          />
<TextInput
            label="Téléphone"
            name="Telephone"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre Téléphone"
            maxLength={20}
            onBlur={() => trigger('Telephone')}
            autoComplete="Telephone"
          />
          <TextInput
            label="Adresse"
            name="adresse"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresse}
            placeholder="Entrez votre adresse"
            maxLength={20}
            onBlur={() => trigger('adresse')}
            autoComplete="adresse"
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
          <TextInput
            label="Pays"
            name="pays"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.pays}
            placeholder="Entrez votre Pays"
            maxLength={20}
            onBlur={() => trigger('pays')}
            autoComplete="pays"
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
