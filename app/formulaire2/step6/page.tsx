'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import TextInput from '@/components/TextInput';
import AddressAutocomplete from './AutoComplete';
import PostAutocomplete from './codeAutoComp';



export default function FormulaireStep6() {
  const router = useRouter();
  const { register, trigger, formState, setValue, setError , clearErrors , watch} = useAppFormContext();
 

  const { isValid, errors } = formState;
 
  const step6_stationnement = watch('step6_stationnementstep6');
  const step6_codepostalstationnement = watch('step6_codepostalstationnement');

  const validateStep = async () => {
    // Check if the address is empty and set an error accordingly
    if (!step6_stationnement || step6_stationnement.length === 0) {
      setError('step6_stationnementstep6', {
        type: 'manual',
        message: 'Champ obligatoire',
      });
    } else {
      clearErrors('step6_stationnementstep6');
    }

    if (!step6_codepostalstationnement || step6_codepostalstationnement.length === 0) {
      setError('step6_codepostalstationnement', {
        type: 'manual',
        message: 'Champ obligatoire',
      });
    } else {
      clearErrors('step6_codepostalstationnement');
    }

    const result = await trigger();

    // Navigate to the next step if the form is valid
    if (result && isValid) {
      router.push('/formulaire/step7');
    }
  };
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step5')}>
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
          Stationnement de
          <span className="text-red-700 px-1">votre véhicule</span>
        </p>


        <div className="flex flex-col space-y-4 mt-6">

          
        <AddressAutocomplete setValue={setValue} error={errors.step6_stationnementstep6} clearErrors={clearErrors} />
          <TextInput
            label="Complément"
            name="step6_complementstep6"
            register={register}
            validationRules={{}}
            error={errors.step6_complementstep6}
            placeholder="Entrez votre complément"
            maxLength={40}
            onBlur={() => trigger('step6_complementstep6')}
            autoComplete="step6_complementstep6"
          />

          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">
            <TextInput
                label="Code postal"
                name="step6_postalstep6"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_postalstep6}
                placeholder="Entrez votre Code postal"
                maxLength={40}
                onBlur={() => trigger('step6_complementstep6')}
                autoComplete="step6_postalstep6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville"
                name="step6_villestep6"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_villestep6}
                placeholder="Entrez votre Ville"
                maxLength={40}
                onBlur={() => trigger('step6_villestep6')}
                autoComplete="step6_villestep6"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:space-x-3  w-full ">
            <div className="lg:w-1/2 w-full">

    <PostAutocomplete setValue={setValue} error={errors.step6_codepostalstationnement} clearErrors={clearErrors} />
            </div>
            <div className="lg:w-1/2 w-full">
              <TextInput
                label="Ville de stationnement au travail"
                name="step6_villestationnement"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.step6_villestationnement}
                placeholder="Entrez votre Ville"
                maxLength={40}
                onBlur={() => trigger('step6_villestationnement')}
                autoComplete="step6_villestationnement"
              />
            </div>
          </div>
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
