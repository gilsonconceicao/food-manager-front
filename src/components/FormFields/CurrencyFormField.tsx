import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { TextFormField, TextFormFieldProps } from './TextFormField';
import { useFormContext } from '@/Contexts/FormContext';

type CurrencyTextFieldProps = {
    name: string;
    label: string;
}

const applyMaskCurrency = (numericValue: number) => {
  return numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
}

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({name, label}) => {
    const { setValue, watch } = useFormContext();
  const [valueView, setValueView] = useState<string>(applyMaskCurrency(watch(name)/100));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value.replace(/[^\d]/g, '') ;
    let numericValue = parseFloat(inputValue?.length > 0 ? inputValue : "0") / 100;
    setValueView(applyMaskCurrency(numericValue));

    setValue(name, numericValue * 100); 
  };



  return (
    <TextField
      label={label}
      variant="outlined"
      value={valueView}
      onChange={handleChange}
      inputProps={{ inputMode: 'numeric' }}
      fullWidth
    />
  );
};

export default CurrencyTextField;
