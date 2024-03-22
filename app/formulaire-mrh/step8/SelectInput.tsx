'use client';
import React from 'react';

interface SelectInputProps {
  label: string;
  name: string;
  value: string; // Added to hold the current value
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Added to handle changes
  error: any; // Adjust based on your error handling strategy
  options: { value: string; label: string }[];
  placeholder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  options,
  placeholder = 'Sélectionner dans le liste',
}) => (
  <label className="flex flex-col space-y-2">
    <div className="flex justify-between">
      <span className="text-lg text-gray-900">{label}</span>
    </div>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`border ${
        error ? 'border-red-900' : 'border-gray-500 focus:border-blue-500'
      } py-4 px-3 rounded-lg mt-1`}
      defaultValue=""
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-lg py-2">
          {option.label}
        </option>
      ))}
    </select>
    {error && <span className="text-red-900">{error}</span>} {/* Adjusted to display error text directly */}
  </label>
);

export default SelectInput;
