import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';

type TextInputProps = {
    label: string;
    name: string;
    control: any;
    rules?: object;
    error?: any ;
    placeholder?: string;
    maxLength?: number;
    autoComplete?: string;
  };
  
  const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    control,
    rules,
    error,
    placeholder = '',
    maxLength,
    autoComplete = 'off',
  }) => {
    // Function to format the input for the new French number plate format (AA-123-AA)
    const formatNumberPlate = (value:any) => {
      if (!value) return ''; // Return an empty string if the value is undefined or null
      const cleanValue = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase(); // Remove non-alphanumeric characters and convert to uppercase
      // Use regex to format as AA-123-AA
      return cleanValue
        .replace(/(.{2})/, '$1-')
        .replace(/-(.{3})/, '-$1-')
        .replace(/-$/, '');
    };
    

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base font-semibold">{label}</label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <input
            type="text"
            {...field}
            value={formatNumberPlate(field.value)}
            onChange={(e) => field.onChange(formatNumberPlate(e.target.value))}
            onBlur={field.onBlur}
            className={clsx(
              'border py-2 px-3 rounded mt-1 text-sm',
              {
                'border-red-500': error,
                'border-gray-300': !error,
              },
              'focus:ring-blue-500 focus:border-blue-500'
            )}
            placeholder={placeholder}
            autoComplete={autoComplete}
            maxLength={maxLength}
          />
        )}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

// Example form component using the TextInput
const VehicleForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Vehicle Number Plate"
        name="numberPlate"
        control={control}
        rules={{ required: "Number plate is required" }}
        error={errors.numberPlate}
        placeholder="Enter vehicle number plate"
        maxLength={9} // AA-123-AA format including hyphens
      />

    </form>
  );
};

export default VehicleForm;