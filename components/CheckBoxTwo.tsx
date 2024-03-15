'use client ';
import React from 'react';
import clsx from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface CheckBoxProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any; // Adjust based on your error handling strategy
  options: { value: string; label: string }[];
  popoverContent?: React.ReactNode; // Content for the popover, now optional
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  register,
  validationRules,
  error,
  options,
  popoverContent,
}) => (
  <fieldset className="flex flex-col space-y-2">
    <legend className="flex flex-row space-x-1">
      <span className={clsx('text-base font-semibold', error ? 'text-red-500' : 'text-gray-950')}>{label}</span>
      {popoverContent && (
        <Popover>
          <PopoverTrigger>{/* Icon or element to trigger popover */}</PopoverTrigger>
          <PopoverContent>{popoverContent}</PopoverContent>
        </Popover>
      )}
    </legend>
    <div className="space-y-1">
      {options.map((option, index) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register(`${name}[${index}]`)}
            value={option.value}
            className="accent-blue-500 h-4 w-4"
          />
          <span className="text-lg">{option.label}</span>
        </label>
      ))}
    </div>
    {error && <span className="text-red-500">{error.message}</span>}
  </fieldset>
);

export default CheckBox;
