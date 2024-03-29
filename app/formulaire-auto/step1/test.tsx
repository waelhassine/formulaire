'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ImmatriculationInputProps {
  setError: (error: string) => void;
  setData: (data: string) => void;
  initialData: string; // Initial data in the format "AA-123-CE"
}

const ImmatriculationInput = ({ setError, setData, initialData }: ImmatriculationInputProps) => {
  const [part1, setPart1] = useState(''); // Initialize with the first part of initial data
  const [part2, setPart2] = useState(''); // Initialize with the second part of initial data
  const [part3, setPart3] = useState(''); // Initialize with the third part of initial data
  const [touched, setTouched] = useState(false); // To track if user has interacted
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);
  const suivantButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      const parts = initialData.split('-');
      if (parts.length === 3) {
        setPart1(parts[0]);
        setPart2(parts[1]);
        setPart3(parts[2]);
        validateImmatriculation(initialData); // Call validateImmatriculation with initial data
      }
    }
  }, [initialData]);
  useEffect(() => {
    if (part3.length === 2) {
      suivantButtonRef.current?.click();
    }
  }, [part3]);

  const validateImmatriculation = (immatriculation: string) => {
    const immatriculationRegex = /^([A-Za-z]{2}-\d{3}-[A-Za-z]{2})|(\d{3}-[A-Za-z]{3}-\d{2})$/;
    if (!immatriculationRegex.test(immatriculation)) {
      setError("L'immatriculation doit être sous la forme AB-123-CD (ou 123-ABC-45 avant 2009).");
    } else {
      setError('');
      setData(immatriculation);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, nextInputRef?: React.RefObject<HTMLInputElement>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value.toUpperCase());
      setTouched(true);
      // Validate as user types
      const newPart1 = e.target.name === 'immatriculation-part-1' ? e.target.value.toUpperCase() : part1;
      const newPart2 = e.target.name === 'immatriculation-part-2' ? e.target.value.toUpperCase() : part2;
      const newPart3 = e.target.name === 'immatriculation-part-3' ? e.target.value.toUpperCase() : part3;
      const immatriculation = `${newPart1}-${newPart2}-${newPart3}`;
      validateImmatriculation(immatriculation);

      if (nextInputRef && e.target.value.length >= e.target.maxLength) {
        nextInputRef.current?.focus();
      }
    };

  return (
    <div className="flex items-center justify-center mt-4 border p-2 border-gray-950 rounded-lg">
      <div className="flex items-center space-x-2">
        <input
          name="immatriculation-part-1"
          type="text"
          inputMode="text"
          placeholder="AA"
          maxLength={2}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part1}
          onChange={handleInputChange(setPart1, input2Ref)}
        />
        <span className="text-gray-500">-</span>
        <input
          ref={input2Ref}
          name="immatriculation-part-2"
          type="text"
          inputMode="numeric"
          placeholder="123"
          maxLength={3}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part2}
          onChange={handleInputChange(setPart2, input3Ref)}
        />
        <span className="text-gray-500">-</span>
        <input
          ref={input3Ref}
          name="immatriculation-part-3"
          type="text"
          inputMode="text"
          placeholder="CD"
          maxLength={2}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part3}
          onChange={handleInputChange(setPart3)}
        />
      </div>
      <button
        ref={suivantButtonRef}
        style={{ display: 'none' }} // Hide the button visually
        onClick={() => {
          // Handle "Suivant" button click
          // You can add your logic here
        }}
      >
        Suivant
      </button>
    </div>
  );
};

export default ImmatriculationInput;
