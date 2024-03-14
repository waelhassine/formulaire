'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import ConsentCheckbox from '@/components/Checkbox';
export default function FormulaireStep9() {
  const router = useRouter();
  const { register, trigger, formState, getValues, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    const allFormValues = getValues();
    await trigger();
    console.log(isValid);
    try {
      const response = await fetch('/api/formulaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allFormValues),
      });

      if (response.ok) {
        // Handle the PDF data returned by the API
        // For example, download the PDF file
        console.log(response);
        // Handle the PDF data returned by the API
        // For example, download the PDF file
        router.push('/merci');
        // Handle the PDF data returned by the API
        // For example, download the PDF file
        // const blob = await response.blob();
        // const downloadUrl = window.URL.createObjectURL(blob);
        // const link = document.createElement('a');
        // link.href = downloadUrl;
        // link.download = 'generated-pdf.pdf';
        // document.body.appendChild(link);
        // link.click();
        // link.remove();
      } else {
        // Handle errors or unsuccessful responses
        console.error('Failed to generate the PDF');
      }
    } catch (error) {
      console.error('There was an error submitting the form:', error);
    }
    // if (isValid) {
    //   try {
    //     const response = await fetch('/api/formulaire', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(allFormValues),
    //     });

    //     if (response.ok) {
    //       // Handle the PDF data returned by the API
    //       // For example, download the PDF file
    //       console.log(response);
    //       // Handle the PDF data returned by the API
    //       // For example, download the PDF file
    //       router.push('/merci');
    //       // Handle the PDF data returned by the API
    //       // For example, download the PDF file
    //       // const blob = await response.blob();
    //       // const downloadUrl = window.URL.createObjectURL(blob);
    //       // const link = document.createElement('a');
    //       // link.href = downloadUrl;
    //       // link.download = 'generated-pdf.pdf';
    //       // document.body.appendChild(link);
    //       // link.click();
    //       // link.remove();
    //     } else {
    //       // Handle errors or unsuccessful responses
    //       console.error('Failed to generate the PDF');
    //     }
    //   } catch (error) {
    //     console.error('There was an error submitting the form:', error);
    //   }
    // }
  };
  const Civilite = watch('Civilite');
  const conducteur_pricipal = watch('conducteur_pricipal');
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
          <p className="text-red-700 px-1">du souscripteur du contrat</p> ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <RadioButtonGroup
            question="Le conducteur principal est-il le souscripteur ?
            "
            name="conducteur_pricipal"
            options={[
              { value: 'Oui', label: 'Oui' },
              { value: 'Non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.conducteur_pricipal}
            currentValue={conducteur_pricipal}
          />
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
            error={errors.Civilite}
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
            validationRules={{}}
            error={errors.complement}
            placeholder="Entrez votre complément"
            maxLength={20}
            onBlur={() => trigger('complement')}
            autoComplete="complement"
          />

          <div className="flex lg:flex-row  flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
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
            <div className="lg:w-1/2 w-full">
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
          <p>
            Afin de vous fournir le contenu demandé, nous devons stocker et traiter vos données personnelles. Si vous
            nous autorisez à stocker vos données personnelles à cette fin, cochez la case ci-dessous.
          </p>
          <ConsentCheckbox
            label="J'accepte le stockage et le traitement de mes données personnelles"
            name="consenttwo"
            register={register}
            validationRules={{ required: 'Vous devez obligatoirement cocher cette case pour valider votre demande.' }}
            error={errors.consenttwo}
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
