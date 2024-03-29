'use client';
import React, { useState, ChangeEvent, MouseEvent } from 'react';
type AddressAutocompleteProps = {
  setValue: any;
  clearErrors: any;
  error: any; // Adjust based on your error handling strategy
};
interface Address {
  properties: {
    id: string;
    label: string;
    name: string;
    postcode: string; // Add postcode
    city: string; // Add city
    country: string; // Add country
  };
}

const AddressAutocomplete = ({ setValue, error, clearErrors }: AddressAutocompleteProps) => {
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
      console.log(data);
      setResults(data.features);
    } catch (error) {
      console.error('Error fetching address autocomplete:', error);
    }
  };

  const handleAddressClick = (address: Address) => {
    const fullAddress = `${address.properties.name}`;
    setQuery(fullAddress);
    setValue('step20_adresse', fullAddress);
    setValue('step20_codepostal', address.properties.postcode);
    setValue('step20_ville', address.properties.city);
    setValue('step20_pays', 'France');
    clearErrors('step20_adresse');
    clearErrors('step20_codepostal');
    clearErrors('step20_ville');
    clearErrors('step20_pays');

    setResults([]); // Clear the results after selecting an address
  };

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-base font-semibold text-gray-950">Adresse</span>
      <input
        className={`border ${
          error ? 'border-red-500' : 'border-gray-950 focus:border-blue-500'
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
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};

export default AddressAutocomplete;
