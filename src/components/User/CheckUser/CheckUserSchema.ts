import yup from "@/Extensions/Schema/yupConfig";


export const checkUserValidationSchema = yup.object().shape({
    registrationNumber: yup.string().typeError('CPF: Precisa ser preenchido').required('CPF: Precisa ser preenchido').registrationNumberValidate()
}); 

export const checkUserValidationDefault = {
    registrationNumber: null
}