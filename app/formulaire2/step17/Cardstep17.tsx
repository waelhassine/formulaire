'use client';
import clsx from 'clsx';
import { Progress } from '@/components/ui/progress';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import { useRouter } from 'next/navigation';
import FormActions from '@/components/FormActions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ProgressHeader from '@/components/ui/progressHeader';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';

type Cardstep17Props = {
  onClose: () => void; 
  index : number;
};
 
export default function Cardstep8({ onClose , index }: Cardstep17Props) {
  const { register, formState: { errors }, watch } = useAppFormContext();
    const contratCours = watch(`card_conducteur_secondaire.${index}.contract_cours`);


  return (
    <div className="w-full max-w-6xl mx-auto"> {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow"> {/* Adjusted padding for larger space inside the card */}
     <div className='flex flex-end justify-end w-full '>
      <button onClick={onClose}  style={{ float: 'left', color: 'red', fontSize: '24px' }} >
  <TrashIcon />
</button></div>



      <SelectInput
          label="Type d'infraction

          "
          name={`card_conducteur_secondaire.${index}.compagnie`}


          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_conducteur_secondaire?.[index]?.compagnie}
         
options={[
  { value: 'Controle_en_alcolémie_positif', label: 'Contrôle en alcolémie positif' },
  { value: 'Controle_en_stupéfiant', label: 'Contrôle en stupéfiant' },
  { value: 'Condamnation_delit_de_fuite', label: 'Condamnation pour délit de fuite' },
  { value: 'Condamnation_pour_refus_d_optemperer', label: "Condamnation pour refus d'obtempérer" },
  { value: 'Condamnation_pour_defaut_assurance', label: "Condamnation pour défaut d'assurance" },
  { value: 'Condamnation_points', label: 'Condamnation pour défaut de points' },
]}
          placeholder=""
        />

<TextInput
          label="
Nombre d'infraction
          "
          name={`card_conducteur_secondaire.${index}.souscription`}

          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montant' }}
          error={errors?.card_conducteur_secondaire?.[index]?.souscription}
          placeholder=""
          maxLength={20}
         
          autoComplete="nombre_infraction"
        />
          <RadioButtonGroup
            question="Le contrat est-il toujours en cours ?

            "
            name={`card_conducteur_secondaire.${index}.contract_cours`}

            options={[
              { value: 'oui', label: 'Oui' },
              { value: 'non', label: 'Non' },
            ]}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors?.card_conducteur_secondaire?.[index]?.contract_cours}

            currentValue={contratCours}
          />
          {contratCours === 'non' && (
            <>
            <TextInput
            label="Date de résiliation

            "
            name={`card_conducteur_secondaire.${index}.resiliation`}
            register={register}
            validationRules={{ required: 'Champ obligatoire' }}
            error={errors?.card_conducteur_secondaire?.[index]?.resiliation}
            type = "date"
          />
            <SelectInput
          label="Motif de résiliation"
          name={`card_conducteur_secondaire.${index}.motif_resiliation`}

          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_conducteur_secondaire?.[index]?.motif_resiliation}
options={[
  { value: 'echeance', label: 'A écheance' },
  { value: 'Autre', label: 'Autre' },
  { value: 'Changement_dadress', label: 'Changement d adress' },
]}
          placeholder=""
        />
</>
          )}
      </div>
    </div>
  );
}
