import React from 'react';
import clsx from 'clsx';

interface ConsentCheckboxProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any; // Adjust based on your error handling strategy
}

const ConsentCheckbox: React.FC<ConsentCheckboxProps> = ({ label, name, register, validationRules, error }) => (
  <div className="flex flex-col space-y-2">
    <label className="inline-flex items-center space-x-2">
      <input
        type="checkbox"
        {...register(name, { ...validationRules })}
        className={clsx(
          'form-checkbox w-4 h-4',
          error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500',
          'rounded',
        )}
      />
      <span className={clsx('text-base', error ? 'text-red-500' : 'text-gray-900')}>{label}</span>
    </label>
    {error && <span className="text-red-500">{error.message}</span>}
  </div>
);

export default ConsentCheckbox;
