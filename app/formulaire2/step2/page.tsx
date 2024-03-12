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
import SelectInput from '@/components/SelectWael';
import TextInput from '@/components/TextInput';

export default function FormulaireStep2() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();

    if (isValid) {
      router.push('/formulaire/step3');
    }
  };
  const adresseCorrespondance = watch('adresseCorrespondance');
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
        Votre véhicule
 <span className="text-red-700 px-1">véhicule</span> 
        </p>

        <div className="flex flex-col space-y-4 mt-6">
        <div className="flex flex-row space-x-3  w-full ">
            <div className="w-1/2">
              <TextInput
                label="Quelle est sa marque ?
                "
                name="marque"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.marque}
                placeholder="Entrez votre marque"
                maxLength={20}
                onBlur={() => trigger('marque')}
                autoComplete="marque"
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label="Quel est son modèle ?
                "
                name="modele"
                register={register}
                validationRules={{ required: 'Champ obligatoire' }}
                error={errors.modele}
                placeholder="Entrez votre modele"
                maxLength={20}
                onBlur={() => trigger('modele')}
                autoComplete="modele"
              />
            </div>
          </div>  

          <TextInput
            label="Quelle est sa finition ?
            "
            name="finition"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.finition}
            placeholder="ex: 1.2 PURE TECH 130 STYLE"
            maxLength={20}
            onBlur={() => trigger('finition')}
            autoComplete="finition"
          />

          <TextInput
            label="Quelle est sa date de première mise en circulation ?
            "
            name="dateName"
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors.dateName}
            placeholder="Entrez votre date"
            maxLength={20}
            onBlur={() => trigger('dateName')}
            autoComplete="dateName"
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
