import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IUsuario } from '../../utilidade/interface'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { Navigate } from 'react-router-dom'
import { ContainerImagem, ContainerLogin, ContainerGeral } from './Login.style'
import backgroundImage from '../../assets/imagem-fundo.jpg'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { userFormSchema } from '../../utilidade/schemas'
import logoQuadrado from '../../assets/logo-quadrado.svg'
import img from '../../assets/Efeito-background.svg'

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUsuario>({
    resolver: yupResolver(userFormSchema)
  })
  const { fazerLogin, token } = useContext(UsuarioContext)

  if (token) {
    return <Navigate to="/Home" />
  }
  return (
    <>
      <ContainerGeral>
        <ContainerImagem>
          <h1>Make your job easier.</h1>
          <h4>Create, add, edit, delete and more!</h4>
        </ContainerImagem>
        <ContainerLogin>
          <div className="ContainerLogo">
            <img src={logoQuadrado}></img>
          </div>
          <div className="ContainerMenor">
            <h1>Tela de Login</h1>
            <form onSubmit={handleSubmit(data => fazerLogin(data))}>
              <input
                type="text"
                id="login"
                placeholder="Login"
                {...register('login')}
              />
              {errors && <p>{errors.login?.message}</p>}
              <input
                type="password"
                id="senha"
                placeholder="Senha"
                {...register('senha')}
              />
              {errors && <p>{errors.senha?.message}</p>}
              <input className="buttonLogin" type="submit" value="Entrar" />
            </form>
            <Link to="/Cadastro">Não tem uma conta? Cadastre-se</Link>
          </div>
        </ContainerLogin>
      </ContainerGeral>
    </>
  )
}
