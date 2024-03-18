'use client';
import useAppFormContext from '@/lib/hooks/useAppFormContext2';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import TextInput from '@/components/TextInput';
import SelectInput from '@/components/SelectWael';
import { TrashIcon } from '@radix-ui/react-icons';

type Cardstep8Props = {
  onClose: () => void;
  index: number;
};

export default function Cardstep10({ onClose, index }: Cardstep8Props) {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useAppFormContext();
  const moin_de_5_ans = watch(`step10_card_Conducteur_v2.${index}.moin_de_5_ans`);
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-6 w-full border p-8 rounded-md shadow">
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 w-full">
          <div className="lg:w-1/2 w-full">
            <SelectInput
              label="Type d'infraction"
              name={`step10_card_Conducteur_v2.${index}.type_infraction`}
              register={register}
              validationRules={{ required: 'Champ obligatoire' }}
              error={errors?.step10_card_Conducteur_v2?.[index]?.type_infraction}
              options={[
                { value: 'Contrôle en alcolémie positif', label: 'Contrôle en alcolémie positif' },
                { value: 'Contrôle en stupéfiant', label: 'Contrôle en stupéfiant' },
                { value: 'Condamnation pour délit de fuite', label: 'Condamnation pour délit de fuite' },
                { value: 'Condamnation pour refus d obtempérer', label: 'Condamnation pour refus d obtempérer' },
                { value: 'Condamnation pour défaut d assurance', label: 'Condamnation pour défaut d assurance' },
                { value: 'Condamnation pour défaut de points', label: 'Condamnation pour défaut de points' },
                { value: 'Condamnation pour une autre raison', label: 'Condamnation pour une autre raison' },
              ]}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <TextInput
              label="Nombre d'infraction"
              name={`step10_card_Conducteur_v2.${index}.nombre_infraction`}
              type="number"
              register={register}
              validationRules={{ required: 'Champ invalide' }}
              error={errors?.step10_card_Conducteur_v2?.[index]?.nombre_infraction}
              placeholder=""
              maxLength={20}
              onBlur={() => trigger('nombre_infraction')}
              autoComplete="nombre_infraction"
            />
          </div>
        </div>

        <RadioButtonGroup
          question="A-t-elle eu lieu il y a moins de 5 ans ?"
          name={`step10_card_Conducteur_v2.${index}.moin_de_5_ans`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.step10_card_Conducteur_v2?.[index]?.moin_de_5_ans}
          currentValue={moin_de_5_ans}
        />
      </div>
    </div>
  );
}
