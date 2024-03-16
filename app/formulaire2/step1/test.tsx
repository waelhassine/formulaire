'use client';
import React, { useState } from 'react';


interface  ImmatriculationInputProps {
  setError: (error: string) => void;
  setData : (data: string) => void;
}

const ImmatriculationInput = ({setError , setData}: ImmatriculationInputProps) => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');



  const validateImmatriculation = () => {
    // Regular expression for validating immatriculation format
    const immatriculationRegex = /^([A-Za-z]{2}-\d{3}-[A-Za-z]{2})|(\d{3}-[A-Za-z]{3}-\d{2})$/;
    const immatriculation = `${part1}-${part2}-${part3}`;
    if (!immatriculationRegex.test(immatriculation)) {
      setError("L'immatriculation doit être sous la forme AB-123-CD (ou 123-ABC-45 avant 2009).");
      console.log("Immatriculation invalide :", immatriculation);
    } else {
      console.log("Immatriculation valide 1111 :", immatriculation);
      setError('');
      setData(immatriculation);

    }
  };

  const handlePart1Change = (e: any) => {
    setPart1(e.target.value);
    validateImmatriculation();
  };

  const handlePart2Change = (e: any) => {
    setPart2(e.target.value);
    validateImmatriculation();
  };

  const handlePart3Change = (e: any) => {
    setPart3(e.target.value);
    validateImmatriculation();
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
          onChange={handlePart1Change}
        />
        <span className="text-gray-500">-</span>
        <input
          name="immatriculation-part-2"
          type="text"
          inputMode="numeric"
          placeholder="123"
          maxLength={3}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part2}
          onChange={handlePart2Change}
        />
        <span className="text-gray-500">-</span>
        <input
          name="immatriculation-part-3"
          type="text"
          inputMode="text"
          placeholder="AA"
          maxLength={2}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part3}
          onChange={handlePart3Change}
        />
      </div>
      
    </div>
  );
};

export default ImmatriculationInput;
