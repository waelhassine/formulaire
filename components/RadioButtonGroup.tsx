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
      <span className="text-base text-gray-950 font-semibold">{question}</span>
    </div>
    <div className="grid grid-cols-2 gap-4 w-ful">
      {options.map((option) => {
        // Create a unique ID using both the name of the group and the option value
        const uniqueId = `${name}-${option.value}`;

        return (
          <div className="flex w-full" key={uniqueId}>
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
                `w-full text-center py-3 border rounded flex flex-row justify-center space-x-3 items-center ${
                  currentValue === option.value
                    ? 'bg-blue-500 bg-opacity-10 text-gray-900 border-blue-500'
                    : 'border-gray-300'
                }`,
              )}
            >
              {option.label}{' '}
              {currentValue === option.value ? (
                <svg
                  width="20"
                  height="20"
                  className="text-blue-500"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                ''
              )}
            </label>
          </div>
        );
      })}
    </div>
    {error && <div className="text-red-900">{error.message}</div>}
  </label>
);

export default RadioButtonGroup;
