'use client';
import { Controller } from "react-hook-form";
import { useFormContext } from "@/Contexts/FormContext";
import { Grid2, TextField, TextFieldProps } from "@mui/material";
import theme from "@/Layout/Theme/Theme";

export type TextFormFieldProps = {
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
                            variant="outlined"
                            placeholder={label}
                            onChange={onChange}
                            value={value}
                            error={!!error}
                            {...rest}
                        />
                        {!!error && <p className="text-[10px] text-red-500">{error?.message}</p>}
                    </Grid2>
                )
            }}
        />
    );
};