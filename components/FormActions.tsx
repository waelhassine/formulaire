'use client';
export default function FormActions({ children }: FormActionsProps) {
  return <div className="">{children}</div>;
}

interface FormActionsProps {
  children: React.ReactNode;
}
