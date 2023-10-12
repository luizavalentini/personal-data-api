import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { IUsuario } from '../../utilidade/interface'
import backgroundImage from '../../assets/imagem-fundo.jpg'
import {
  ContainerRegister,
  ContainerGeral,
  ContainerImagem
} from './CriarUsuario.style'
import { yupResolver } from '@hookform/resolvers/yup'
import { userFormSchema } from '../../utilidade/schemas'
import logoQuadrado from '../../assets/logo-quadrado.svg'

export const CriarUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUsuario>({
    resolver: yupResolver(userFormSchema)
  })
  const { CriarNovoUsuario } = useContext(UsuarioContext)

  useEffect(() => {
    console.log({ register })
  }, [])

  return (
    <>
      <ContainerGeral>
        <ContainerImagem>
          <h1>Make your job easier.</h1>
          <h4>Create, add, edit, delete and more!</h4>
        </ContainerImagem>
        <ContainerRegister>
          <div className="ContainerLogo">
            <img src={logoQuadrado}></img>
          </div>
          <div className="ContainerMenor">
            <h1>Cadastro</h1>
            <form onSubmit={handleSubmit(data => CriarNovoUsuario(data))}>
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
              <input
                className="buttonLogin"
                type="submit"
                value="Criar novo usuário"
              />
            </form>
          </div>
        </ContainerRegister>
      </ContainerGeral>
    </>
  )
}
