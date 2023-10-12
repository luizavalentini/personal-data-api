import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const RotaPrivada = () => {
  const { token } = useContext(UsuarioContext)

  return token ? <Outlet /> : <Navigate to="/" />
}
