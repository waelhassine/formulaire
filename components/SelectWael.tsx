import React from 'react';

interface SelectInputProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any; // Adjust based on your error handling strategy
  options: { value: string; label: string }[];
  placeholder?: string;
}
const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  register,
  validationRules,
  error,
  options,
  placeholder = 'Select an option',
}) => (
  <label className="flex flex-col space-y-2">
    <div className="flex justify-between">
      <span className="text-base text-gray-950 font-semibold">{label}</span>
    </div>
    <select
      {...register(name, { ...validationRules })}
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
    {error && <span className="text-red-900">{error.message}</span>}
  </label>
);

export default SelectInput;
