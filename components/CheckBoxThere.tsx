'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, value, checked, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, event.target.checked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

interface CheckboxGroupProps {
  options: { label: string; value: string }[];
  onChange: (values: string[]) => void;
  error: any; // Adjust based on your error handling strategy
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, onChange, error }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, value]);
    } else {
      setCheckedItems((prevCheckedItems) => prevCheckedItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (checkedItems.length > 0) {
      onChange(checkedItems);
    } else {
      alert('Please select at least one option.');
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className={clsx('text-base font-semibold', error ? 'text-red-500' : 'text-gray-950')}>
        Précision sur votre installation d`energie renouvelables
      </span>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          value={option.value}
          checked={checkedItems.includes(option.value)}
          onChange={handleCheckboxChange}
        />
      ))}
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

// Example usage:
const ExampleComponent: React.FC = () => {
  const handleCheckboxGroupChange = (values: string[]) => {
    console.log('Checked items:', values);
  };

  const options = [
    { label: 'Panneaux solaires thermique', value: 'Panneaux solaires thermique' },
    { label: 'Panneaux photovoltaiques', value: 'Panneaux photovoltaiques' },
    { label: 'Éolienne', value: 'Éolienne' },
    // Add more options as needed
  ];

  return <CheckboxGroup options={options} onChange={handleCheckboxGroupChange} error="" />;
};

export default ExampleComponent;
