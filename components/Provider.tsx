'use client';
import useAppForm from '@/lib/hooks/useAppForm';
import { SubmitHandler, FormProvider } from 'react-hook-form';
// Types
import { FormValues } from '@/types/form';
import { useRouter } from 'next/navigation';

export default function Provider({ children }: FormProviderProps) {
  const route = useRouter();

  const methods = useAppForm({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    billing: 'monthly',
    ville: '',
    addons: {
      online: false,
      storage: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const isValid = !!(data.name && data.email && data.phone && data.ville && data.adresse);

    if (isValid) {
      route.push('/thank-you');
    } else {
      route.replace('/info');
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
