'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import RadioButtonGroup from './RadioButtonGroup'; // Assuming RadioButtonGroup is in the same directory
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { TrashIcon } from '@radix-ui/react-icons'; // Import the icon

type Cardstep8Props = {
  onClose: () => void;
  onFormDataChange: (data: any) => void; // Specify the type of data as per your application's needs
};

export default function Cardstep8({ onClose, onFormDataChange }: Cardstep8Props) {
  const router = useRouter();

  // Form state
  const [formData, setFormData] = useState({
    compagnie: '',
    souscription: '',
    contrat_cours: '',
    resiliation: '',
    motif_resiliation: '',
  });

  // Errors state
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      onFormDataChange(updatedData); // Notify parent component of the change
      return updatedData;
    });
    // Optionally, validate input here and set errors
  };

  // Example validation function
  const validateForm = () => {
    const newErrors = {};
    // Example: Check if compagnie is empty
    if (!formData.compagnie) {
      newErrors.compagnie = 'Champ obligatoire';
    }
    // Add other validation checks here...
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep = () => {
    const isValid = validateForm();
    if (isValid) {
      // Proceed to the next step
      router.push('/formulaire/step5');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>

        <SelectInput
          label="Compagnie"
          name="compagnie"
          value={formData.compagnie}
          onChange={handleChange}
          error={errors.compagnie}
          options={[
            { value: 'SIMPLE', label: 'SIMPLE' },
            { value: '2MA', label: '2MA' },
            // Add more options as needed
          ]}
          placeholder=""
        />

        <TextInput
          label="Date de souscription"
          name="souscription"
          value={formData.souscription}
          onChange={handleChange}
          error={errors.souscription}
          type="date"
        />

        <RadioButtonGroup
          question="Le contrat est-il toujours en cours ?"
          name="contrat_cours"
          value={formData.contrat_cours} // Modified to use value instead of currentValue
          onChange={handleChange}
          error={errors.contrat_cours}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
        />

        {formData.contrat_cours === 'non' && (
          <>
            <TextInput
              label="Date de résiliation"
              name="resiliation"
              value={formData.resiliation}
              onChange={handleChange}
              error={errors.resiliation}
              type="date"
            />
            <SelectInput
              label="Motif de résiliation"
              name="motif_resiliation"
              value={formData.motif_resiliation}
              onChange={handleChange}
              error={errors.motif_resiliation}
              options={[
                { value: 'echeance', label: 'A écheance' },
                { value: 'Autre', label: 'Autre' },
                // Add more options as needed
              ]}
              placeholder=""
            />
          </>
        )}
      </div>
    </div>
  );
}
