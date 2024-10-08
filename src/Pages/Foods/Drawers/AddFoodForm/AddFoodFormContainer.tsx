import { FormContextProvider } from '@/Contexts/FormContext'
import React from 'react'
import { AddFoodForm } from './AddFoodForm'
import { addFoodFormDefaultValues, addFoodFormSchema } from './AddFoodFormSchema'
import { FieldValues } from 'react-hook-form'

type AddFoodFormContainerProps = {
    onClose: () => void;
}

export const AddFoodFormContainer: React.FC<AddFoodFormContainerProps> = ({onClose}) => {

    const onSubmit = (values: FieldValues) => {
        debugger
    }

    return (
        <FormContextProvider
            defaultValues={addFoodFormDefaultValues}
            validationSchema={addFoodFormSchema}
            onSubmit={onSubmit}
        >
            <AddFoodForm onClose={onClose}/>
        </FormContextProvider>
    )
}
