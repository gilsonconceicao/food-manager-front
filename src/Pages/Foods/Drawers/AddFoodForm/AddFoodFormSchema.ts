import yup from "@/Extensions/Schema/yupConfig";

export const addFoodFormSchema = yup.object().shape({
  name: yup.string().typeError('Nome: Precisa ser preenchido').required('Nome: Precisa ser preenchido'),
  urlImage: yup.string().typeError('Link da imagem: Precisa ser preenchido').required('Link da imagem: Precisa ser preenchido'),
  description: yup.string().typeError('Descrição: Precisa ser preenchido').required('Descrição: Precisa ser preenchido'),
  price: yup.string().typeError('Preço: Precisa ser preenchido').required('Preço: Precisa ser preenchido'),
  category: yup.string().typeError('Categoria: Precisa ser preenchido').required('Categoria: Precisa ser preenchido'),
});

export const addFoodFormDefaultValues = {
  name: null,
  urlImage: null,
  description: null,
  price: 1000,
  category: null,
}