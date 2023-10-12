export interface IUsuario {
  login: string
  senha: string
}
export interface IChildren {
  children?: React.ReactNode
}

export interface IusuarioContext {
  CriarNovoUsuario: (novoUsuario: IUsuario) => Promise<void>
  fazerLogin: (usuario: IUsuario) => Promise<void>
  fazerLogout: () => Promise<void>
  token: string
}

export const toastConfig: object = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
}

export interface IPessoas {
  nome: string
  dataNascimento: string
  cpf: string
  email: string
  idPessoa: number
}

export interface IEndereco {
  idPessoa: number
  tipo: string
  logradouro: string
  numero: number
  complemento: string
  cep: string
  cidade: string
  estado: string
  pais: string
  idEndereco: number
}

export interface IPessoaContext {
  criarDadosPessoa: (people: IPessoas) => Promise<void>

  buscarDadosPessoa: (people: any) => Promise<void>
  deletarUsuario: (idUsuario: number) => Promise<void>
  editaUsuario: (idUsuario: IPessoas) => Promise<void>
  totalPages: number
  dadosPessoa: IPeopleData[]
}
export interface IPeopleData extends IPessoas {
  idPessoa: number
}

export interface IContatoContext {
  criarContatos: (contato: IContato, id: number) => Promise<void>
  buscarContatos: () => Promise<void>
  dadosContatos: IContato | undefined | any
  editarContatos: (idContato: IContato) => Promise<void>
  // deletarContato: (idContato: IContato) => Promise<void>
  deletarContato: (idContato: number) => Promise<void>
}

export interface IContato {
  tipoContato: string
  telefone: string
  descricao: string
  idPessoa: number
  idContato: number
}
export interface IEnderecoContext {
  criaEnderecoPessoa: (endereco: IEndereco, idPessoa: number) => Promise<void>
  dadosEnderecos: IEndereco | undefined | any
  listaEndereco: (page: string) => Promise<void>

  deleteEndereco: (id: number) => Promise<void>
  editaEndereco: (endereco: IEndereco) => Promise<void>
  totalDePaginas: number

  pegaCep: (cep: string) => Promise<void>
  dadosApi: Record<string, string>
}
