import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../utilidade/api'
import { IChildren, IUsuario, IusuarioContext } from '../utilidade/interface'
import { toastConfig } from '../utilidade/interface'

export const UsuarioContext = createContext({} as IusuarioContext)

export const UsuarioProvider = ({ children }: IChildren) => {
  const navigate = useNavigate()
  const [token, setToken] = useState<string>(
    localStorage.getItem('token') || ''
  )

  const CriarNovoUsuario = async (novoUsuario: IUsuario) => {
    try {
      await api.post('/auth/create', novoUsuario)
      toast.success('Usuário criado com sucesso', toastConfig)
      navigate('/Home')
    } catch (error) {
      console.log(error)
      toast.error('Erro, tente novamente!', toastConfig)
    } finally {
    }
  }

  const fazerLogin = async (usuario: IUsuario) => {
    try {
      const { data } = await api.post('/auth', usuario)
      api.defaults.headers.common['Authorization'] = token
      localStorage.setItem('token', data)
      setToken(data)
      navigate('/Home')
    } catch (error) {
      console.log(error)
      toast.error('Ocorreu algum erro', toastConfig)
    }
  }

  const fazerLogout = async () => {
    localStorage.removeItem('token')
    api.defaults.headers.common['Authorization'] = undefined
    setToken('')
    navigate('/')
  }

  useEffect(() => {
    if (token !== '') {
      api.defaults.headers.common['Authorization'] = token
    }
  }, [])

  return (
    <UsuarioContext.Provider
      value={{ CriarNovoUsuario, fazerLogout, fazerLogin, token }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}
