'use client';
import useAppForm from '@/lib/hooks/useAppForm2';
import { SubmitHandler, FormProvider } from 'react-hook-form';
// Types
import { FormValues } from '@/types/form2';
import { useRouter } from 'next/navigation';

export default function Provider2({ children }: FormProviderProps) {
  const route = useRouter();

  const methods = useAppForm({
    name: '',
    email: '',
    phone: '',
    adresse: '',
    complement: '',
    codepostal: '',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const isValid = !!(data.name && data.email && data.phone && data.ville && data.adresse && data.logementDangereuse);

    if (isValid) {
      route.push('/merci');
    } else {
      route.replace('/formulaire2/step1');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex w-full">
        {children}
      </form>
    </FormProvider>
  );
}

interface FormProviderProps {
  children: React.ReactNode;
}
