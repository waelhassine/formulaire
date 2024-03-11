import React from 'react';
import clsx from 'clsx';

interface TextInputProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any;
  placeholder?: string;
  maxLength?: number;
  onBlur?: () => void;
  autoComplete?: string;
  type?: 'text' | 'number' | 'date' | 'textarea'; // Add 'textarea' as a possible type
  rows?: number; // Optional prop for textarea rows
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  validationRules,
  error,
  placeholder = '',
  maxLength,
  onBlur,
  autoComplete = 'off',
  type = 'text',
  rows = 4, // Default rows for textarea
}) => (
  <label className="flex flex-col space-y-2">
    <div className="flex justify-between">
      <span className={clsx('text-base font-semibold', error ? 'text-red-500' : 'text-gray-950')}>{label}</span>
    </div>
    {type !== 'textarea' ? (
      <input
        type={type}
        className={clsx(
          'border',
          error ? 'border-red-500' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-medium',
          'focus:outline-none',
        )}
        {...register(name, {
          ...validationRules,
          maxLength: maxLength ? { value: maxLength, message: `Must be less than ${maxLength} characters` } : undefined,
        })}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        className={clsx(
          'border',
          error ? 'border-red-500' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-medium',
          'focus:outline-none',
        )}
        {...register(name, {
          ...validationRules,
          maxLength: maxLength ? { value: maxLength, message: `Must be less than ${maxLength} characters` } : undefined,
        })}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    )}
    {error && <span className="text-red-500">{error.message}</span>}
  </label>
);

export default TextInput;
