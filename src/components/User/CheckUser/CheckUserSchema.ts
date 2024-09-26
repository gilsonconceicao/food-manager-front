import yup from "@/Extensions/Schema/yupConfig";


export const checkUserValidationSchema = yup.object().shape({
    registratioNumber: yup.string().typeError('CPF: Precisa ser preenchido').required('CPF: Precisa ser preenchido').registratioNumberValidate()
}); 

export const checkUserValidationDefault = {
    registrationNumber: null
}