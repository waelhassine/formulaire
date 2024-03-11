import React from 'react';
import clsx from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// Define the TypeScript interface for the component's props
interface RadioButtonGroupProps {
  question: string;
  name: string;
  options: { value: string; label: string }[];
  register: Function;
  validationRules?: object;
  error: any; // Replace with a more specific type based on your error handling strategy
  currentValue: string;
  popoverContent?: React.ReactNode; // Content for the popover, now optional
}
const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  question,
  name,
  options,
  register,
  validationRules,
  error,
  currentValue,
  popoverContent,
}) => (
  <label className="flex flex-col space-y-2 mt-6">
    <div className="flex flex-row space-x-1">
      <span className={clsx('text-base font-semibold', error ? 'text-red-500' : ' text-gray-950')}>{question}</span>

      {popoverContent && (
        <Popover>
          <PopoverTrigger>
            <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.877075 7.49972C0.877075 3.84204 3.84222 0.876892 7.49991 0.876892C11.1576 0.876892 14.1227 3.84204 14.1227 7.49972C14.1227 11.1574 11.1576 14.1226 7.49991 14.1226C3.84222 14.1226 0.877075 11.1574 0.877075 7.49972ZM7.49991 1.82689C4.36689 1.82689 1.82708 4.36671 1.82708 7.49972C1.82708 10.6327 4.36689 13.1726 7.49991 13.1726C10.6329 13.1726 13.1727 10.6327 13.1727 7.49972C13.1727 4.36671 10.6329 1.82689 7.49991 1.82689ZM8.24993 10.5C8.24993 10.9142 7.91414 11.25 7.49993 11.25C7.08571 11.25 6.74993 10.9142 6.74993 10.5C6.74993 10.0858 7.08571 9.75 7.49993 9.75C7.91414 9.75 8.24993 10.0858 8.24993 10.5ZM6.05003 6.25C6.05003 5.57211 6.63511 4.925 7.50003 4.925C8.36496 4.925 8.95003 5.57211 8.95003 6.25C8.95003 6.74118 8.68002 6.99212 8.21447 7.27494C8.16251 7.30651 8.10258 7.34131 8.03847 7.37854L8.03841 7.37858C7.85521 7.48497 7.63788 7.61119 7.47449 7.73849C7.23214 7.92732 6.95003 8.23198 6.95003 8.7C6.95004 9.00376 7.19628 9.25 7.50004 9.25C7.8024 9.25 8.04778 9.00601 8.05002 8.70417L8.05056 8.7033C8.05924 8.6896 8.08493 8.65735 8.15058 8.6062C8.25207 8.52712 8.36508 8.46163 8.51567 8.37436L8.51571 8.37433C8.59422 8.32883 8.68296 8.27741 8.78559 8.21506C9.32004 7.89038 10.05 7.35382 10.05 6.25C10.05 4.92789 8.93511 3.825 7.50003 3.825C6.06496 3.825 4.95003 4.92789 4.95003 6.25C4.95003 6.55376 5.19628 6.8 5.50003 6.8C5.80379 6.8 6.05003 6.55376 6.05003 6.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </PopoverTrigger>
          <PopoverContent>{popoverContent}</PopoverContent>
        </Popover>
      )}
    </div>
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full">
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
                error ? 'border-red-500' : '',
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
    {error && <div className="text-red-500">{error.message}</div>}
  </label>
);

export default RadioButtonGroup;
