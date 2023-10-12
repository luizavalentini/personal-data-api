import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../utilidade/api'
import nProgress from 'nprogress'

import {
  IPessoaContext,
  toastConfig,
  IChildren,
  IPessoas,
  IPeopleData
} from '../utilidade/interface'
import { UsuarioContext } from './UsuarioContext'
import { useNavigate, Navigate } from 'react-router-dom'

export const PessoaContext = createContext({} as IPessoaContext)

export const PessoaProvider = ({ children }: IChildren) => {
  const [totalPages, setTotalPages] = useState(0)
  const [dadosPessoa, setDadosPessoa] = useState<IPeopleData[]>([])
  const { token } = useContext(UsuarioContext)
  const navigate = useNavigate()

  const criarDadosPessoa = async (people: IPessoas) => {
    try {
      people.cpf = people.cpf.replace(/[^\d]/g, '')
      await api.post('/pessoa', people)
      toast.success('Dados pessoais cadastrado!', toastConfig)
      navigate('/Home')
    } catch (error) {
      console.log(error)
      toast.error('Algo deu errado, tente novamente', toastConfig)
    }
  }

  const buscarDadosPessoa = async (page: string) => {
    try {
      api.defaults.headers.common['Authorization'] = token
      const { data } = await api.get(
        `/pessoa?pagina=${parseInt(page) - 1}&tamanhoDasPaginas=20`
      )
      setTotalPages(data.totalPages)
      setDadosPessoa(data.content)
    } catch (error) {
      console.log(error)
    }
  }

  const deletarUsuario = async (idUsuario: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token
      await api.delete(`/pessoa/${idUsuario}`)
      buscarDadosPessoa('1')
      toast.success('Usuário deletado com sucesso!', toastConfig)
    } catch (error) {
      console.log(error)
    }
  }

  const editaUsuario = async (idUsuario: IPessoas) => {
    try {
      nProgress.start()
      await api.put(`/pessoa/${`/${idUsuario.idPessoa}`}`, idUsuario)
      toast.success('Usuário editado com sucesso!', toastConfig)
      navigate('/Home')
    } catch (error) {
      toast.error('Houve algum error, tente novamente!', toastConfig)
      console.error(error)
    } finally {
      nProgress.done()
    }
  }

  return (
    <PessoaContext.Provider
      value={{
        criarDadosPessoa,
        dadosPessoa,
        buscarDadosPessoa,
        deletarUsuario,
        editaUsuario,
        totalPages
      }}
    >
      {children}
    </PessoaContext.Provider>
  )
}
