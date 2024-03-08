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
  type?: 'text' | 'number'; // Add this line
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
  type = 'text', // Set default type to 'text'
}) => (
  <label className="flex flex-col space-y-2">
    <div className="flex justify-between">
      <span className="text-lg text-gray-900">{label}</span>
    </div>
    <input
      type={type} // Use the type prop here
      className={clsx(
        'border',
        error ? 'border-red-900' : 'border-gray-900 focus:border-blue-500',
        'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
        'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
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
    {error && <span className="text-red-900">{error.message}</span>}
  </label>
);

export default TextInput;
