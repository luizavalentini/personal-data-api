import * as yup from 'yup'

export const userFormSchema = yup.object().shape({
  login: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'O login deve ter no mínimo 3 caractéres'),
  senha: yup
    .string()
    .required('Digite sua senha')
    .min(3, 'A senha deve ter no mínimo 3 caracteres')
})

export const CadastroDePessoasSchema = yup.object().shape({
  nome: yup
    .string()
    .required('Campo obrigatório')
    .min(3, 'O login deve ter no mínimo 3 caractéres'),
  dataNascimento: yup.string().required('Selecione uma data de nascimento'),
  cpf: yup.string().required('Digite seu cpf'),

  email: yup.string().required('Digite o seu e-mail')
})

export const ContatoSchema = yup.object().shape({
  tipoContato: yup.string().required('Campo obrigatório'),
  telefone: yup.string().required('Digite o seu telefone'),
  descricao: yup.string().required('Digite uma descrição, exemplo: Whatsapp')
})

export const enderecoFormSchema = yup.object().shape({
  cep: yup
    .string()
    .required('Por favor, digite o CEP')
    .length(9, 'O CEP precisa ter 8 dígitos'),
  tipo: yup.string().required('O tipo é obrigatório'),
  logradouro: yup.string().required('O logradouro é obrigatório'),
  numero: yup
    .string()
    .required('O número é obrigatório')
    .min(1, 'O número precisa ser no mínimo 1'),
  complemento: yup.string(),
  cidade: yup
    .string()
    .required('A cidade é obrigatória')
    .min(3, 'A cidade precisa ter no mínimo 3 letras'),
  estado: yup.string().required('O estado é obrigatório'),
  pais: yup.string().required('O país é obrigatório')
})
