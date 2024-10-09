import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { useFormContext } from '@/Contexts/FormContext';
import { Typography } from '@mui/material';

export type SelectOptionType = {
    label: string;
    value: string
}

type SelectFormFieldProps = {
    options: SelectOptionType[];
    name: string;
    label: string;
} & SelectProps

export function SelectFormField({ options, name, ...rest}: SelectFormFieldProps) {
    const { setValue, watch, errors} = useFormContext();

    const handleChange = (e: SelectChangeEvent<any>) => {
        const valueSelected = e.target.value;
        const findItem = options.find(item => item.value === valueSelected);

        if (findItem !== null) {
            setValue(name, findItem?.value);
            setValue(`${name}Display`, findItem?.label);
        }
    }

    const value = watch(name);
    //@ts-ignore
    const messageError = errors[name]?.message?.toString() ?? "";

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{rest.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                    {...rest}
                >
                    {options.map((x) => {
                        return (
                            <MenuItem key={x.value} value={x.value}>{x.label}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            {!!errors && messageError.length > 0 && <Typography className="text-[10px] mt-2 text-red-500">{messageError}</Typography>}

        </Box>
    );
}