'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import ProgressHeader from '@/components/ui/progressHeader';
import { Button } from '@/components/ui/button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import Cardstep8 from './Cardstep8';

// Define a type for the card data
interface CardData {
  key: number;
  data: any; // Define a more specific type based on your form data structure
}

export default function FormulaireStep8() {
  const router = useRouter();
  const [cards, setCards] = useState<CardData[]>([]);

  const addNewCard = (event) => {
    // Add a new card with an initial empty data structure
    event.preventDefault(); // Prevent default button click behavior
    setCards((prevCards) => [...prevCards, { key: prevCards.length, data: {} }]);
  };

  const removeCard = (key: number) => {
    // Remove a card by its key
    setCards((prevCards) => prevCards.filter((card) => card.key !== key));
  };

  const handleCardUpdate = (key: number, updatedData: any) => {
    // Update the data for a specific card
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.key === key) {
          return { ...card, data: updatedData };
        }
        return card;
      }),
    );
  };

  const validateStep = async () => {
    // Example validation logic before navigating
    // Ensure all cards are valid or some other validation
    // This is where you'd typically consolidate data from all cards if needed

    // Dummy isValid check - implement your validation logic
    console.log(cards);
    // const isValid = true;

    // if (isValid) {
    //   router.push('/formulaire/step9');
    // }
  };

  return (
    <div className="w-full">
      <ProgressHeader val={90} />
      <div className="flex flex-col space-y-4 w-2/3">
        <p className="flex flex-row text-2xl pt-12">
          Antécédents <span className="text-red-700 px-1">dassurance</span>
        </p>

        {cards.map((card) => (
          <Cardstep8
            key={card.key}
            onClose={() => removeCard(card.key)}
            onFormDataChange={(data) => handleCardUpdate(card.key, data)}
          />
        ))}

        {cards.length === 0 && (
          <Button variant="outline" onClick={(event) => addNewCard(event)}>
            Aucun antécédent assurance
          </Button>
        )}
        <Button variant="secondary" onClick={(event) => addNewCard(event)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter un antécédent
        </Button>

        <Button type="button" size={'lg'} className="bg-blue-800 text-xl" onClick={validateStep}>
          Suivant
        </Button>
      </div>
    </div>
  );
}
