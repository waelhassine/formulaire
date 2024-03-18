'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface CheckBoxProps {
  label: string;
  name: string;
  validationRules: Record<string, any>;
  options: { value: string; label: string }[];
  popoverContent?: React.ReactNode; // Content for the popover, now optional
  handleEngergieData: any;
  error: any;
  setValue: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  name,
  validationRules,
  options,
  popoverContent,
  handleEngergieData,
  error,
  setValue,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [selectedValues, setSelectedValues] = useState<string>(''); // New state to hold selected values as a string

  const handleCheckboxChange = (value: string) => {
    const updatedCheckedItems = { ...checkedItems, [value]: !checkedItems[value] };

    setCheckedItems(updatedCheckedItems);

    // Update selectedValues based on checked items
    const selectedItems = Object.keys(updatedCheckedItems).filter((key) => updatedCheckedItems[key]);
    setSelectedValues(selectedItems.join('-'));
    // Validate minimum selection

    setValue('precision_installation_energie', selectedItems.join('-'));
  };

  return (
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
              checked={checkedItems[option.value] || false}
              onChange={() => handleCheckboxChange(option.value)}
              className="accent-blue-500 h-4 w-4"
            />
            <span className="text-lg">{option.label}</span>
          </label>
        ))}
      </div>

      {error && <span className="text-red-500">{error.message}</span>}
    </fieldset>
  );
};

export default CheckBox;
