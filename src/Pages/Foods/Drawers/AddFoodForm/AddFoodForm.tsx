import { ActionsButtons } from "@/components/Buttons/ActionsButtons/ActionsButtons";
import CurrencyTextField from "@/components/FormFields/CurrencyFormField";
import { TextFormField } from "@/components/FormFields/TextFormField";
import { Stack } from "@mui/material";
import React from "react";

type AddFoodFormProps = {
    onClose: () => void;
}

export const AddFoodForm: React.FC<AddFoodFormProps> = ({ onClose }) => {
    return (
        <Stack spacing={2} mt={3}>
            <TextFormField
                label="Nome"
                name="name"
                fullWidth
            />
            <TextFormField
                label="Link da imagem"
                name="urlImage"
                fullWidth
            />
            <CurrencyTextField
                name="price"
                label="Preço"
            // fullWidth
            />
            <TextFormField
                label="Descrição"
                name="description"
                fullWidth
                rows={4}
                multiline
            />

            <ActionsButtons onClose={onClose} />
        </Stack>
    );
};
