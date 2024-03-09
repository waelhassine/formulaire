'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Cardstep8 from './Cardstep8';
import { useState } from 'react';

type Card = {
    key: number;
    // any other properties here
  };
  
export default function FormulaireStep8() {
    const router = useRouter();
    const { register, trigger, formState, control, watch } = useAppFormContext();
    const [cards, setCards] = useState<Card[]>([]);
  
    const { isValid } = formState;
  
    const validateStep = async () => {
      await trigger();
  
      if (isValid) {
        router.push('/formulaire/step9');
      }
    };
  
    const addNewCard = () => {
      // Function to add a new card, incrementing the key each time
      setCards(prevCards => [...prevCards, { key: prevCards.length }]);
    };
    const removeCard = (index:any) => {
        // Function to remove a card based on its index
        setCards(prevCards => prevCards.filter((_, i) => i !== index));
      };
    
    
    return (
        <div className="w-full">
        <ProgressHeader val={90} />
        <div className="flex flex-col space-y-4 w-2/3">
          <p className="flex flex-row text-2xl pt-12">
            Antécédents <span className="text-red-700 px-1">d'assurance</span>
          </p>
  
          {cards.map((card, index) => (
            <Cardstep8 key={card.key} onClose={() => removeCard(index)} />
          ))}
  
          {cards.length === 0 && (
            <Button variant="outline" onClick={addNewCard}>
              Aucun antécédent d'assurance
            </Button>
          )}
          <Button variant="secondary" onClick={addNewCard}>
            <PlusCircledIcon className="mr-2 h-4 w-4" /> Ajouter un antécédent
          </Button>
  
          <Button type="button" size={'lg'} className="bg-blue-800 text-xl" onClick={validateStep}>
            Suivant
          </Button>
        </div>
      </div>
    );
  }
  