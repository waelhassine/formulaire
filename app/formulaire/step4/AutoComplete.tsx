'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface Address {
  properties: {
    id: string;
    label: string;
    postcode: string; // Add postcode
    city: string; // Add city
    country: string; // Add country
  };
}

type AddressAutocompleteProps = {
  setValue: any;
};

const AddressAutocomplete = ({ setValue }: AddressAutocompleteProps) => {
  const [query, setQuery] = useState<string>('');
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
      setResults(data.features);
    } catch (error) {
      console.error('Error fetching address autocomplete:', error);
    }
  };

  const handleAddressClick = (address: Address) => {
    const fullAddress = `${address.properties.label}, ${address.properties.postcode} ${address.properties.city}, France`;
    setQuery(fullAddress);
    setValue('adresse', fullAddress);
    setValue('codepostal', address.properties.postcode);
    setValue('ville', address.properties.city);
    setValue('pays', 'France');

    setResults([]); // Clear the results after selecting an address
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-base font-semibold text-gray-950">Adresse</span>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter an address..."
        className="w-full py-2 lg:py-3 px-3 lg:px-4 border border-gray-900 rounded-md"
      />
      <ul className="mt-2 border border-gray-800 rounded-lg">
        {results.map((result) => (
          <li
            key={result.properties.id}
            className="p-2 border-b border-gray-500"
            onClick={(e: MouseEvent<HTMLLIElement>) => handleAddressClick(result)}
          >
            {`${result.properties.label}, ${result.properties.postcode} ${result.properties.city}, France`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressAutocomplete;
