'use client';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckBoxProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any; // Adjust based on your error handling strategy
  options: { value: string; label: string }[];
  popoverContent?: React.ReactNode; // Content for the popover, now optional
}

const MultiSelectCheckbox: React.FC<CheckBoxProps> = ({
  label,
  name,
  register,
  validationRules,
  error,
  options,
  popoverContent,
}) => {
  const { watch } = useFormContext();
  const selectedOptions = watch(name);

  // Custom validation can be handled inside or outside the component.
  // Example: Ensuring at least one checkbox is selected
  const atLeastOneChecked = selectedOptions && Object.values(selectedOptions).some((value) => value);

  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {options.map((option) => (
          <label key={option.value}>
            <input type="checkbox" {...register(`${name}.${option.value}`, validationRules)} />
            {option.label}
          </label>
        ))}
        {popoverContent && <div>{popoverContent}</div>}
        {!atLeastOneChecked && error && <p>{error.message}</p>}
      </fieldset>
    </div>
  );
};

export default MultiSelectCheckbox;
