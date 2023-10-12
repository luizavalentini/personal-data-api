import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../utilidade/api'
import nProgress from 'nprogress'
import {
  IContatoContext,
  toastConfig,
  IChildren,
  IPessoas,
  IContato
} from '../utilidade/interface'

import { useNavigate, Navigate } from 'react-router-dom'

export const ContatosContext = createContext({} as IContatoContext)

export const ContatosProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const criarContatos = async (contato: IContato, idPessoa: number) => {
    try {
      api.defaults.headers.common['Authorization'] = token
      await api.post(`/contato/${idPessoa}`, contato)
      toast.success('Usuário cadastrado com sucesso', toastConfig)
      navigate('/PaginaContato')
    } catch (error) {
      toast.error('Algo deu errado, tente novamente', toastConfig)
      console.error(console.log)
    }
  }

  const [dadosContatos, setDadosContatos] = useState<IContato>()

  const buscarContatos = async () => {
    try {
      api.defaults.headers.common['Authorization'] = token
      await api
        .get('/contato/')
        .then(response => setDadosContatos(response.data))
    } catch (error) {
      console.log(error)
    }
  }

  const editarContatos = async (idContato: IContato) => {
    try {
      nProgress.start()
      api.defaults.headers.common['Authorization'] = token
      await api.put(`/contato/${idContato.idContato}`, idContato)
      toast.success('Usuário editado com sucesso!', toastConfig)
      navigate('/PaginaContato')
    } catch (error) {
      toast.error('Houve algum erro, tente novamente!', toastConfig)
      console.error(error)
    } finally {
      nProgress.done()
    }
  }

  const deletarContato = async (idContato: number) => {
    try {
      nProgress.start()
      api.defaults.headers.common['Authorization'] = token
      await api.delete(`contato/${idContato}`)
      toast.success('Usuário editado com sucesso!', toastConfig)
    } catch (error) {
      toast.error('Houve algum erro, tente novamente!', toastConfig)
      console.error(error)
    } finally {
      nProgress.done()
    }
  }

  return (
    <ContatosContext.Provider
      value={{
        criarContatos,
        buscarContatos,
        dadosContatos,
        editarContatos,
        deletarContato
      }}
    >
      {children}
    </ContatosContext.Provider>
  )
}
