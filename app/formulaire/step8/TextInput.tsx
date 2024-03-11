import React from 'react';
import clsx from 'clsx';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: any; // Adjust based on your error handling strategy
  placeholder?: string;
  maxLength?: number;
  onBlur?: () => void;
  autoComplete?: string;
  type?: 'text' | 'number' | 'date' | 'textarea'; // Added 'textarea' as a possible type
  rows?: number; // Optional, for textarea
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder = '',
  maxLength,
  onBlur,
  autoComplete = 'off',
  type = 'text',
  rows = 3, // Default rows for textarea
}) => {
  // Determine whether to render an input or a textarea based on the type prop
  const inputElement =
    type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
        maxLength={maxLength}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        className={clsx(
          'border',
          error ? 'border-red-900' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
          'focus:outline-none',
        )}
      />
    ) : (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        maxLength={maxLength}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={clsx(
          'border',
          error ? 'border-red-900' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-bold',
          'focus:outline-none',
        )}
      />
    );

  return (
    <label className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <span className="text-lg text-gray-900">{label}</span>
      </div>
      {inputElement}
      {error && <span className="text-red-900">{error}</span>}
    </label>
  );
};

export default TextInput;
