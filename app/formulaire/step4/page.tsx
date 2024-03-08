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

export default function FormulaireStep4() {
  const router = useRouter();
  const { register, trigger, formState, control, watch } = useAppFormContext();

  const { isValid, errors } = formState;

  const validateStep = async () => {
    await trigger();
    if (isValid) {
      router.push('/plan');
    }
  };
  const adresseCorrespondance = watch('adresseCorrespondance');
  return (
    <div className="w-full">
      <ProgressHeader val={40} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row  text-2xl pt-12">
          Quel est le <p className="text-red-700 px-1">type de logement</p> à assurer ?
        </p>

        <div className="flex flex-col space-y-4 mt-6">
          <label className="flex flex-col space-y-2 mt-6">
            <div className="flex justify-between">
              <span className=" text-lg text-gray-900">
                L'adresse du logement correspond-t'elle à celle du souscripteur?
              </span>
            </div>
            <div className="flex flex-row space-x-2 w-full ">
              <div className="flex w-1/2">
                <input
                  {...register('adresseCorrespondance')}
                  type="radio"
                  value="oui"
                  id="oui"
                  className="sr-only"
                  checked={adresseCorrespondance === 'oui'}
                />
                <label
                  htmlFor="oui"
                  className={` px-32 py-4 border rounded ${
                    adresseCorrespondance === 'oui'
                      ? 'bg-blue-500 bg-opacity-10 text-gray-900 border-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  Oui
                </label>
              </div>
              <div className="flex  w-1/2">
                <input
                  {...register('adresseCorrespondance')}
                  type="radio"
                  value="non"
                  id="non"
                  className="sr-only"
                  checked={adresseCorrespondance === 'non'}
                />
                <label
                  htmlFor="non"
                  className={` px-32 py-4  border rounded ${
                    adresseCorrespondance === 'non'
                      ? 'bg-blue-500 bg-opacity-10 text-gray-900 border-blue-500'
                      : 'border-gray-300'
                  }`}
                >
                  Non
                </label>
              </div>
            </div>
          </label>

          {errors.adresseCorrespondance && <p className="text-red-500">{errors.adresseCorrespondance.message}</p>}

          <label className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <Label className=" text-lg text-gray-900">Adresse</Label>
            </div>
            <input
              className={clsx(
                'border',
                errors.adresse ? ' border-red-900' : 'border-gray-900 focus:border-blue-500',
                'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
                'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
                'focus:outline-none',
              )}
              {...register('adresse', {
                required: 'Champ obligatoire',
                maxLength: {
                  value: 20,
                  message: 'Name must be less than 20 characters',
                },
              })}
              onBlur={() => trigger('adresse')}
              autoComplete="adresse"
            />
            {errors.adresse && <Label className=" text-red-900">{errors.adresse?.message}</Label>}
          </label>
          <label className="flex flex-col space-y-2 ">
            <div className="flex justify-between">
              <Label className=" text-lg text-gray-900">Complément</Label>
            </div>
            <input
              className={clsx(
                'border',
                errors.complement ? ' border-red-900' : 'border-gray-900 focus:border-blue-500',
                'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
                'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
                'focus:outline-none',
              )}
              {...register('complement', {
                required: 'Champ obligatoire',
                maxLength: {
                  value: 20,
                  message: 'Name must be less than 20 characters',
                },
              })}
              onBlur={() => trigger('complement')}
              autoComplete="complement"
            />
            {errors.complement && <Label className=" text-red-900">{errors.complement.message}</Label>}
          </label>
          <div className="flex flex-row space-x-3  w-full ">
            <label className="flex flex-col space-y-2 w-1/2 ">
              <div className="flex justify-between">
                <Label className=" text-lg text-gray-900">Code postal</Label>
              </div>
              <input
                className={clsx(
                  'border',
                  errors.codepostal ? ' border-red-900' : 'border-gray-900 focus:border-blue-500',
                  'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
                  'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
                  'focus:outline-none',
                )}
                {...register('codepostal', {
                  required: 'Champ obligatoire',
                  maxLength: {
                    value: 20,
                    message: 'Name must be less than 20 characters',
                  },
                })}
                onBlur={() => trigger('codepostal')}
                autoComplete="codepostal"
              />
              {errors.codepostal && <Label className=" text-red-900">{errors.codepostal.message}</Label>}
            </label>
            <label className="flex flex-col space-y-2 w-1/2">
              <div className="flex justify-between">
                <Label className=" text-lg text-gray-900">Ville</Label>
              </div>
              <input
                className={clsx(
                  'border',
                  errors.ville ? ' border-red-900' : 'border-gray-900 focus:border-blue-500',
                  'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
                  'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
                  'focus:outline-none',
                )}
                {...register('ville', {
                  required: 'Champ obligatoire',
                  maxLength: {
                    value: 20,
                    message: 'Name must be less than 20 characters',
                  },
                })}
                onBlur={() => trigger('ville')}
                autoComplete="ville"
              />
              {errors.ville && <Label className=" text-red-900">{errors.ville?.message}</Label>}
            </label>
          </div>
          <label className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <Label className=" text-lg text-gray-900">Pays</Label>
            </div>
            <input
              className={clsx(
                'border',
                errors.pays ? ' border-red-900' : 'border-gray-900 focus:border-blue-500',
                'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
                'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
                'focus:outline-none',
              )}
              {...register('pays', {
                required: 'Champ obligatoire',
                maxLength: {
                  value: 20,
                  message: 'Name must be less than 20 characters',
                },
              })}
              onBlur={() => trigger('pays')}
              autoComplete="pays"
            />
            {errors.pays && <Label className=" text-red-900">{errors.pays?.message}</Label>}
          </label>
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
