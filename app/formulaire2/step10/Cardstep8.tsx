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

export default function Cardstep8({ onClose, index }: Cardstep8Props) {
  const {
    register,
    formState: { errors },
    watch,
    trigger,
  } = useAppFormContext();
  const moin_de_5_ans = watch(`card_Conducteur_v2.${index}.moin_de_5_ans`);
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-6 w-full border p-8 rounded-md shadow">
        <div className="flex flex-end justify-end w-full ">
          <button onClick={onClose} style={{ float: 'left', color: 'red', fontSize: '24px' }}>
            <TrashIcon />
          </button>
        </div>
        <div className="flex flex-row gap-4 w-full">
  <div className="flex-1">
    <SelectInput
      label="Type d'infraction"
      name={`card_Conducteur_v2.${index}.type_infraction`}
      register={register}
      validationRules={{ required: 'Champ obligatoire' }}
      error={errors?.card_Conducteur_v2?.[index]?.type_infraction}
      options={[
        { value: 'SIMPLE', label: 'SIMPLE' },
        { value: '2MA', label: '2MA' },
        { value: 'ACHEEL', label: 'ACHEEL' },
        { value: 'ACPS', label: 'ACPS' },
        { value: 'ACTEL', label: 'ACTEL' },
        { value: 'ADAM', label: 'ADAM' },
      ]}
    />
  </div>
  <div className="flex-1">
    <TextInput
      label="Nombre d'infraction"
      name={`card_Conducteur_v2.${index}.nombre_infraction`}
      type="number"
      register={register}
      validationRules={{ required: 'Champ invalide' }}
      error={errors?.card_Conducteur_v2?.[index]?.nombre_infraction}
      placeholder=""
      maxLength={20}
      onBlur={() => trigger('nombre_infraction')}
      autoComplete="nombre_infraction"
    />
  </div>
</div>


        <RadioButtonGroup
          question="A-t-elle eu lieu il y a moins de 5 ans ?"
          name={`card_Conducteur_v2.${index}.moin_de_5_ans`}
          options={[
            { value: 'oui', label: 'Oui' },
            { value: 'non', label: 'Non' },
          ]}
          register={register}
          validationRules={{ required: 'Champ obligatoire' }}
          error={errors?.card_Conducteur_v2?.[index]?.moin_de_5_ans}
          currentValue={moin_de_5_ans}
        />
      </div>
    </div>
  );
}
