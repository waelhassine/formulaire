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

export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step5');
    }
  };
  const adresseCorrespondance = watch('adresseCorrespondance');
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <button className="flex flex-row space-x-2 items-center justify-center mt-6" onClick={() => router.push('step3')}>
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
          <RadioButtonGroup
            question="L'adresse du logement correspond-elle à celle du souscripteur?"
            name="adresseCorrespondance"
            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.adresseCorrespondance}
            currentValue={adresseCorrespondance}
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
