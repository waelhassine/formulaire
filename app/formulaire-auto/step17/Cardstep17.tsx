'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';

type Cardstep17Props = {
  onClose: () => void;
  index: number;
};

export default function Cardstep8({ onClose, index }: Cardstep17Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useAppFormContext();
  const Ont_elles_moins_de_5_ans = watch(`step17_card_conducteur_infraction.${index}.Ont_elles_moins_de_5_ans`);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {' '}
      {/* Adjusted for a larger width with max-width and auto margins for centering */}
      <div className="flex flex-col space-y-4 w-full border p-8 rounded-md shadow">
        {' '}
        {/* Adjusted padding for larger space inside the card */}
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>
        <SelectInput
          label="Type d'infraction"
          name={`step17_card_conducteur_infraction.${index}.type_infractionstep17`}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step17_card_conducteur_infraction?.[index]?.type_infractionstep17}
          options={[
            { value: 'Contrôle en alcolémie positif', label: 'Contrôle en alcolémie positif' },
            { value: 'Contrôle en stupéfiant', label: 'Contrôle en stupéfiant' },
            { value: 'Condamnation pour délit de fuite', label: 'Condamnation pour délit de fuite' },
            { value: 'Condamnation pour refus d obtempérer', label: "Condamnation pour refus d'obtempérer" },
            { value: 'Condamnation pour défaut d assurance', label: "Condamnation pour défaut d'assurance" },
            { value: 'Condamnation pour défaut de points', label: 'Condamnation pour défaut de points' },
          ]}
          placeholder=""
        />
        <TextInput
          label="Nombre d'infraction"
          name={`step17_card_conducteur_infraction.${index}.nomber_infractionstep17`}
          type="number"
          register={register}
          validationRules={{ required: 'Merci de renseigner un montant' }}
          error={errors?.step17_card_conducteur_infraction?.[index]?.nomber_infractionstep17}
          placeholder=""
          maxLength={20}
          autoComplete="nomber_infraction"
        />
        <RadioButtonGroup
          question="Le contrat est-il toujours en cours ?"
          name={`step17_card_conducteur_infraction.${index}.Ont_elles_moins_de_5_ans`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step17_card_conducteur_infraction?.[index]?.Ont_elles_moins_de_5_ans}
          currentValue={Ont_elles_moins_de_5_ans}
        />
      </div>
    </div>
  );
}
