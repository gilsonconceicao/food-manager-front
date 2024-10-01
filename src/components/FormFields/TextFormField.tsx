'use client';
import { Controller } from "react-hook-form";
import { useFormContext } from "@/Contexts/FormContext";
import { Grid2, TextField, TextFieldProps } from "@mui/material";

type TextFormFieldProps = {
    name: string,
    label: string
} & TextFieldProps;

export const TextFormField = ({ name, label, ...rest }: TextFormFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => {
                return (
                    <Grid2>
                        <TextField
                            label={label}
                            variant={rest.variant ?? "filled"}
                            placeholder={label}
                            onChange={onChange}
                            value={value}
                            {...rest}
                            InputProps={{
                                ...rest.InputProps,
                                sx: {
                                    color: '#fff', // Cor do texto do input
                                    '::placeholder': {
                                        color: 'gray', // Cor do placeholder
                                        opacity: 1 // Opacidade total
                                    }
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: '#fff' // Cor da label
                                }
                            }}
                        />
                        {!!error && <p className="text-[10px] text-red-500">{error?.message}</p>}
                    </Grid2>
                )
            }}
        />
    );
};