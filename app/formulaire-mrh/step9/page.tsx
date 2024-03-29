'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import ConsentCheckbox from '@/components/Checkbox';
import AddressAutocomplete from './AutoComplete';
export default function FormulaireStep9() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, trigger, formState, control, watch, getValues, setValue, clearErrors } = useAppFormContext();
  const addr = getValues('adresse_step9');
  const { isValid, errors } = formState;

  const validateStep = async () => {
    const allFormValues = getValues();

    await trigger();
    setIsLoading(true);
    if (isValid) {
      try {
        const response = await fetch('/api/version-two/formulaire-mrh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(allFormValues),
        });

        if (response.ok) {
          setIsLoading(false);
          router.push('/merci');
        } else {
          // Handle errors or unsuccessful responses
          console.error('Failed to generate the PDF');
        }
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      }
    }
  };
  const Civilite_step9 = watch('Civilite_step9');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step7')}>
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
        <p className="flex flex-row  lg:text-2xl text-base pt-12">
          Coordonnées
          <p className="text-red-700 px-1">du souscripteur du contrat</p> ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Civilite"
            name="Civilite_step9"
            options={[
              { value: 'Monsieur', label: 'Monsieur' },
              { value: 'Madame', label: 'Madame' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.Civilite_step9}
            currentValue={Civilite_step9}
          />
          <TextInput
            label="Prénom"
            name="Prenom_step9"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.Prenom_step9}
            placeholder="Entrez votre Prenom"
            maxLength={40}
            onBlur={() => trigger('Prenom_step9')}
            autoComplete="Prenom_step9"
          />
          <TextInput
            label="Nom"
            name="Nom_step9"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.Nom_step9}
            placeholder="Entrez votre Nom"
            maxLength={40}
            onBlur={() => trigger('Nom_step9')}
            autoComplete="Nom_step9"
          />
          <TextInput
            label="Date de naissance"
            name="date_de_naissance_step9"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.date_de_naissance_step9}
            type="date"
          />
          <TextInput
            label="Email"
            name="Email_step9"
            register={register}
            validationRules={{
              required: 'Champ obligatoire',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Veuillez entrer une adresse email valide',
              },
            }}
            error={errors.Email_step9}
            placeholder="Entrez votre Email"
            maxLength={40}
            onBlur={() => trigger('Email_step9')}
            autoComplete="Email_step9"
          />
          <TextInput
            label="Téléphone"
            name="Telephone_step9"
            register={register}
            validationRules={{
              required: 'Champ obligatoire',
              pattern: {
                value: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
                message: 'Veuillez entrer un numéro de téléphone valide exemple 01 23 45 67 89',
              },
            }}
            error={errors.Telephone_step9}
            placeholder="Entrez votre Téléphone"
            maxLength={40}
            onBlur={() => trigger('Telephone_step9')}
            autoComplete="Telephone_step9"
          />
          <AddressAutocomplete
            setValue={setValue}
            error={errors.adresse_step9}
            clearErrors={clearErrors}
            defaultvalue={addr}
          />
          <TextInput
            label="Complément"
            name="complement_step9"
            register={register}
            validationRules={{}}
            error={errors.complement_step9}
            placeholder="Entrez votre complément"
            maxLength={40}
            onBlur={() => trigger('complement_step9')}
            autoComplete="complement_step9"
          />

          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Code postal"
                name="codepostal_step9"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.codepostal_step9}
                placeholder="Entrez votre Code postal"
                maxLength={40}
                onBlur={() => trigger('codepostal_step9')}
                autoComplete="codepostal_step9"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville"
                name="ville_step9"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.ville_step9}
                placeholder="Entrez votre Ville"
                maxLength={40}
                onBlur={() => trigger('ville_step9')}
                autoComplete="ville_step9"
              />
            </div>
          </div>
          <TextInput
            label="Pays"
            name="pays_step9"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.pays_step9}
            placeholder="Entrez votre Pays"
            maxLength={20}
            onBlur={() => trigger('pays_step9')}
            autoComplete="pays"
          />
          <p>
            Afin de vous fournir le contenu demandé, nous devons stocker et traiter vos données personnelles. Si vous
            nous autorisez à stocker vos données personnelles à cette fin, cochez la case ci-dessous.
          </p>
          <ConsentCheckbox
            label="J'accepte le stockage et le traitement de mes données personnelles"
            name="consent"
            register={register}
            validationRules={{ required: 'Vous devez obligatoirement cocher cette case pour valider votre demande.' }}
            error={errors.consent}
          />
        </div>
        <FormActions>
          <Button
            disabled={isLoading}
            type="button"
            size={'lg'}
            className="mt-8 bg-blue-800 text-xl w-full lg:w-1/3"
            onClick={validateStep}
          >
            {isLoading && (
              <>
                <div
                  className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                </div>
              </>
            )}
            Suivant
          </Button>
        </FormActions>
      </div>
    </div>
  );
}
