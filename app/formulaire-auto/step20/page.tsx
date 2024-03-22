'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import ConsentCheckbox from '@/components/Checkbox';
import AddressAutocomplete from './AutoComplete';
export default function FormulaireStep9() {
  const router = useRouter();
  const { register, trigger, formState, getValues, control, watch, setValue, clearErrors } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    const allFormValues = getValues();
    await trigger();
    console.log(isValid);
    if (isValid) {
      try {
        const response = await fetch('/api/formulaire', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(allFormValues),
        });

        if (response.ok) {
          console.log(response);

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
  const step20_civilite = watch('step20_civilite');
  const step20_conducteur_pricipal = watch('step20_conducteur_pricipal');
  return (
    <div className="w-full">
      <ProgressHeader val={100} />
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
      <div className="flex flex-col space-y-4 lg:w-2/3 w-full">
        <p className="flex flex-row  text-2xl pt-12">
          Coordonnées
          <span className="text-red-700 px-1">du souscripteur du contrat</span> ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Le conducteur principal est-il le souscripteur ?"
            name="step20_conducteur_pricipal"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step20_conducteur_pricipal}
            currentValue={step20_conducteur_pricipal}
          />
          <RadioButtonGroup
            question="Civilite"
            name="step20_civilite"
            options={[
              { value: 'oui', label: 'Monsieur' },
              { value: 'non', label: 'Madame' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step20_civilite}
            currentValue={step20_civilite}
          />
          <TextInput
            label="Prénom"
            name="step20_prenom"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step20_prenom}
            placeholder="Entrez votre Prenom"
            maxLength={40}
            onBlur={() => trigger('step20_prenom')}
            autoComplete="step20_prenom"
          />
          <TextInput
            label="Nom"
            name="step20_nom"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step20_nom}
            placeholder="Entrez votre Nom"
            maxLength={40}
            onBlur={() => trigger('step20_nom')}
            autoComplete="step20_nom"
          />

          <TextInput
            label="Email"
            name="step20_email"
            register={register}
            validationRules={{
              required: 'Champ obligatoire',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Veuillez entrer une adresse email valide',
              },
            }}
            error={errors.step20_email}
            placeholder="Entrez votre Email"
            maxLength={40}
            onBlur={() => trigger('step20_email')}
            autoComplete="step20_email"
          />
          <TextInput
            label="Téléphone"
            name="step20_telephone"
            register={register}
            validationRules={{
              required: 'Champ obligatoire',
              pattern: {
                value: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
                message: 'Veuillez entrer un numéro de téléphone valide exemple 01 23 45 67 89',
              },
            }}
            error={errors.step20_telephone}
            placeholder="Entrez votre Téléphone"
            maxLength={40}
            onBlur={() => trigger('step20_telephone')}
            autoComplete="Telephone"
          />
          <AddressAutocomplete setValue={setValue} error={errors.step20_adresse} clearErrors={clearErrors} />
          <TextInput
            label="Complément"
            name="step20_complément"
            register={register}
            validationRules={{}}
            error={errors.step20_complément}
            placeholder="Entrez votre complément"
            maxLength={40}
            onBlur={() => trigger('step20_complément')}
            autoComplete="step20_complément"
          />

          <div className="flex lg:flex-row  flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Code postal"
                name="step20_codepostal"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step20_codepostal}
                placeholder="Entrez votre Code postal"
                maxLength={40}
                onBlur={() => trigger('step20_codepostal')}
                autoComplete="step20_codepostal"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville"
                name="step20_ville"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step20_ville}
                placeholder="Entrez votre Ville"
                maxLength={30}
                onBlur={() => trigger('step20_ville')}
                autoComplete="ville"
              />
            </div>
          </div>
          <TextInput
            label="Pays"
            name="step20_pays"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.step20_pays}
            placeholder="Entrez votre Pays"
            maxLength={30}
            onBlur={() => trigger('step20_pays')}
            autoComplete="pays"
          />
          <p>
            Afin de vous fournir le contenu demandé, nous devons stocker et traiter vos données personnelles. Si vous
            nous autorisez à stocker vos données personnelles à cette fin, cochez la case ci-dessous.
          </p>
          <ConsentCheckbox
            label="J'accepte le stockage et le traitement de mes données personnelles"
            name="step20_consenttwo"
            register={register}
            validationRules={{ required: 'Vous devez obligatoirement cocher cette case pour valider votre demande.' }}
            error={errors.step20_consenttwo}
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
