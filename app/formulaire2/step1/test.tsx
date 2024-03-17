import React, { useState } from 'react';

interface ImmatriculationInputProps {
  setError: (error: string) => void;
  setData: (data: string) => void;
}

const ImmatriculationInput = ({ setError, setData }: ImmatriculationInputProps) => {
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [touched, setTouched] = useState(false); // To track if user has interacted

  const validateImmatriculation = () => {
    if (!touched) return; // Skip validation if not interacted
    const immatriculation = `${part1}-${part2}-${part3}`;
    const immatriculationRegex = /^([A-Za-z]{2}-\d{3}-[A-Za-z]{2})|(\d{3}-[A-Za-z]{3}-\d{2})$/;
    if (!immatriculationRegex.test(immatriculation)) {
      setError("L'immatriculation doit être sous la forme AB-123-CD (ou 123-ABC-45 avant 2009).");
    } else {
      setError('');
      setData(immatriculation);
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value.toUpperCase());
      setTouched(true);
    };

  // OnBlur handler to validate when user clicks out of the input field
  const handleBlur = () => {
    validateImmatriculation();
  };

  return (
    <div className=" flex items-center justify-center mt-4 border p-2 border-gray-950 rounded-lg ">
      <div className="flex items-center space-x-2 ">
        <input
          name="immatriculation-part-1"
          type="text"
          inputMode="text"
          placeholder="AA"
          maxLength={2}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part1}
          onChange={handleInputChange(setPart1)}
          onBlur={handleBlur} // Validate on blur
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
          onChange={handleInputChange(setPart2)}
          onBlur={handleBlur} // Validate on blur
        />
        <span className="text-gray-500">-</span>
        <input
          name="immatriculation-part-3"
          type="text"
          inputMode="text"
          placeholder="CD"
          maxLength={2}
          className="border border-gray-300 rounded-md px-2 py-1 w-16 focus:outline-none focus:border-blue-500"
          value={part3}
          onChange={handleInputChange(setPart3)}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default ImmatriculationInput;
