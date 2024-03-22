'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import type { Address } from '@/lib/types';
type AddressAutocompleteProps = {
  setValue: any;
  clearErrors: any;
  error: any; // Adjust based on your error handling strategy
};

const PostAutocomplete = ({ setValue, error, clearErrors }: AddressAutocompleteProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Address[]>([]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    try {
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port&postcode=${inputValue}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('114',data);
      setResults(data.features);
    } catch (error) {
      console.error('Error fetching address autocomplete:', error);
    }
  };

  const handleAddressClick = (address: Address) => {
    const fullAddress = `${address.properties.postcode}`;
    setQuery(fullAddress);
    setValue('step6_codepostalstationnement', fullAddress);
    setValue('step6_villestationnement', address.properties.city);
    clearErrors('step6_codepostalstationnement');
    clearErrors('step6_villestationnement');


    setResults([]); // Clear the results after selecting an address
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className={`  ${
          error ? 'text-red-500' : 'text-gray-900'
        } text-base font-semibold`}>Code Postal de stationnement au travail</span>
      <input
        className={`border ${
          error ? 'border-red-500' : 'border-gray-500 focus:border-blue-500'
        } py-4 px-3 rounded-lg mt-1 `}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Entrer votre Code postal"
        
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

export default PostAutocomplete;
