import { FormContextProvider } from '@/Contexts/FormContext'
import React from 'react'
import { AddFoodForm } from './AddFoodForm'
import { addFoodFormDefaultValues, addFoodFormSchema } from './AddFoodFormSchema'
import { FieldValues } from 'react-hook-form'
import { useCreateFoodMutate } from '@/Hooks/Foods/useFoodContext'

type AddFoodFormContainerProps = {
    onClose: () => void;
    refetch: () => void;
}

export const AddFoodFormContainer: React.FC<AddFoodFormContainerProps> = ({onClose, refetch}) => {
   
    const onSuccess = () => {
        onClose();
        refetch()
    }

    const { mutateAsync } = useCreateFoodMutate(onSuccess); 

    const onSubmit = (values: FieldValues) => {
        mutateAsync(values); 
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
