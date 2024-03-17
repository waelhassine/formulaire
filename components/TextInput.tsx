'use client';
import React from 'react';
import clsx from 'clsx';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
interface TextInputProps {
  label: string;
  name: string;
  register: Function;
  validationRules: Record<string, any>;
  error: any;
  placeholder?: string;
  maxLength?: number;
  onBlur?: () => void;
  autoComplete?: string;
  type?: 'text' | 'number' | 'date' | 'textarea'; // Add 'textarea' as a possible type
  rows?: number; // Optional prop for textarea rows
  popoverContent?: React.ReactNode; // Content for the popover, now optional
  space?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  register,
  validationRules,
  error,
  placeholder = '',
  maxLength,
  onBlur,
  autoComplete = 'off',
  type = 'text',
  rows = 4, // Default rows for textarea
  popoverContent,
  space = false,
}) => (
  <label className="flex flex-col space-y-2">
    <div className="flex flex-row space-x-1">
      <span className={clsx('text-base font-semibold', error ? 'text-red-500' : 'text-gray-950', space ? 'pb-6' : '')}>
        {label}
      </span>
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
    {type !== 'textarea' ? (
      <input
        type={type}
        className={clsx(
          'border',
          error ? 'border-red-500' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-medium',
          'focus:outline-none',
        )}
        {...register(name, {
          ...validationRules,
          maxLength: maxLength ? { value: maxLength, message: `Must be less than ${maxLength} characters` } : undefined,
        })}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
      />
    ) : (
      <textarea
        className={clsx(
          'border',
          error ? 'border-red-500' : 'border-gray-900 focus:border-blue-500',
          'py-2 lg:py-3 px-3 lg:px-4 rounded-[4px] lg:rounded-lg mt-1',
          'text-[15px] lg:text-base text-marine-blue placeholder:text-cool-gray font-medium lg:font-medium',
          'focus:outline-none',
        )}
        {...register(name, {
          ...validationRules,
          maxLength: maxLength ? { value: maxLength, message: `Must be less than ${maxLength} characters` } : undefined,
        })}
        onBlur={onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    )}
    {error && <span className="text-red-500">{error.message}</span>}
  </label>
);

export default TextInput;
