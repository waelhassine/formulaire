'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import type { Address } from '@/lib/types';
type AddressAutocompleteProps = {
  setValue: any;
  clearErrors: any;
  error: any; // Adjust based on your error handling strategy
  defaultvalue?: string;
};

const AddressAutocomplete = ({ setValue, error, clearErrors, defaultvalue }: AddressAutocompleteProps) => {
  const [query, setQuery] = useState<string | undefined>(defaultvalue);
  const [results, setResults] = useState<Address[]>([]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputValue}&autocomplete=1&limit=10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setResults(data.features);
    } catch (error) {
      console.error('Error fetching address autocomplete:', error);
    }
  };

  const handleAddressClick = (address: Address) => {
    const fullAddress = `${address.properties.name}`;
    setQuery(fullAddress);
    setValue('adresse_step9', fullAddress);
    setValue('codepostal_step9', address.properties.postcode);
    setValue('ville_step9', address.properties.city);
    setValue('pays_step9', 'France');
    clearErrors('adresse_step9');
    clearErrors('codepostal_step9');
    clearErrors('ville_step9');
    clearErrors('pays_step9');

    setResults([]); // Clear the results after selecting an address
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-base font-semibold text-gray-950">Adresse</span>
      <input
        className={`border ${
          error ? 'border-red-500' : 'border-gray-500 focus:border-blue-500'
        } py-4 px-3 rounded-lg mt-1`}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Entrer votre adresse..."
      />
      <ul className="mt-2  rounded-xl shadow-lg ">
        {results.map((result) => (
          <li
            key={result.properties.id}
            className="p-2 border-b border-gray-500"
            onClick={(e: MouseEvent<HTMLLIElement>) => handleAddressClick(result)}
          >
            {`${result.properties.label}`}
          </li>
        ))}
      </ul>
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default AddressAutocomplete;
