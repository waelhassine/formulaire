import React from 'react';
import clsx from 'clsx';

// Define the TypeScript interface for the component's props
interface RadioButtonGroupProps {
  question: string;
  name: string;
  options: { value: string; label: string }[];
  register: Function;
  validationRules?: object;
  error: any; // Replace with a more specific type based on your error handling strategy
  currentValue: string;
}
const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  question,
  name,
  options,
  register,
  validationRules,
  error,
  currentValue,
}) => (
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
              {...register(name, { ...validationRules })}
              type="radio"
              value={option.value}
              id={uniqueId} // Use the unique ID
              className="sr-only"
              checked={currentValue === option.value}
            />
            <label
              htmlFor={uniqueId} // Match the htmlFor with the unique ID
              className={clsx(
                error ? 'border-red-900' : '',
                `px-32 py-4 border rounded ${
                  currentValue === option.value
                    ? 'bg-blue-500 bg-opacity-10 text-gray-900 border-blue-500'
                    : 'border-gray-300'
                }`,
              )}
            >
              {option.label}
            </label>
          </div>
        );
      })}
    </div>
    {error && <div className="text-red-900">{error.message}</div>}
  </label>
);

export default RadioButtonGroup;
