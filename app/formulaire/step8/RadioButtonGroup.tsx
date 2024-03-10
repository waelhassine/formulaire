'use client';
import React from 'react';
import clsx from 'clsx';

// Define the TypeScript interface for the component's props
interface RadioButtonGroupProps {
  question: string;
  name: string;
  options: { value: string; label: string }[];
  value: string; // This now represents the selected value
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added to handle changes
  error: any; // Replace with a more specific type based on your error handling strategy
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ question, name, options, value, onChange, error }) => (
  <label className="flex flex-col space-y-2 mt-6">
    <div className="flex justify-between">
      <span className="text-lg text-gray-900">{question}</span>
    </div>
    <div className="flex flex-row space-x-2 w-full">
      {options.map((option) => {
        // Create a unique ID using both the name of the group and the option value
        const uniqueId = `${name}-${option.value}`;

        return (
          <div className="flex w-1/2" key={uniqueId}>
            <input
              type="radio"
              name={name}
              value={option.value}
              id={uniqueId} // Use the unique ID
              onChange={onChange} // Use the onChange handler
              checked={value === option.value} // Check if the current option is selected
              className="sr-only" // Keep it screen reader only if styling labels
            />
            <label
              htmlFor={uniqueId} // Match the htmlFor with the unique ID
              className={clsx(
                error ? 'border-red-900' : '',
                `px-32 py-4 border rounded ${
                  value === option.value ? 'bg-blue-500 bg-opacity-10 text-gray-900 border-blue-500' : 'border-gray-300'
                }`,
              )}
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
    {error && <div className="text-red-900">{error}</div>}
  </label>
);

export default RadioButtonGroup;
