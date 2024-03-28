'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { AddressPostal } from '@/lib/types';

type AddressAutocompleteProps = {
  setValue: any;
  clearErrors: any;
  error: any;
};

const API_KEY = '98242f00-ea1a-11ee-8097-df8218c329bb';

const PostAutocomplete = ({ setValue, error, clearErrors }: AddressAutocompleteProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<AddressPostal[]>([]);

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    if (inputValue.length >= 5) {
      // Assuming postal codes are 5 digits
      try {
        const response = await fetch(
          `https://app.zipcodebase.com/api/v1/search?apikey=${API_KEY}&codes=${inputValue}&country=fr`,
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const postalCodes = Object.keys(data.results);
        const addresses = postalCodes.flatMap((code) => data.results[code]);
        setResults(addresses);
      } catch (error) {
        console.error('Error fetching address autocomplete:', error);
      }
    } else {
      setResults([]); // Clear results if input is less than 5 characters
    }
  };

  const handleAddressClick = (address: AddressPostal) => {
    const fullAddress = `${address.postal_code}`;
    setQuery(fullAddress);
    setValue('step6_codepostalstationnement', address.postal_code);
    setValue('step6_villestationnement', address.city);
    clearErrors('step6_codepostalstationnement');
    clearErrors('step6_villestationnement');

    setResults([]); // Clear the results after selecting an address
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className={`${error ? 'text-red-500' : 'text-gray-900'} text-base font-semibold`}>
        Code Postal de stationnement au travail
      </span>
      <input
        className={`border ${
          error ? 'border-red-500' : 'border-gray-500 focus:border-blue-500'
        } py-4 px-3 rounded-lg mt-1 `}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Entrer votre Code postal"
      />
      <ul className="mt-2 rounded-xl shadow-lg ">
        {results.map((result, index) => (
          <li
            key={index} // Using index as key because result structure might not have a unique id
            className="p-2 border-b border-gray-500"
            onClick={(e: MouseEvent<HTMLLIElement>) => handleAddressClick(result)}
          >
            {`${result.city}`}
          </li>
        ))}
      </ul>
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default PostAutocomplete;
