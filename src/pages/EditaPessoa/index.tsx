import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from '../EditaPessoa/EditaPessoa.style'

export const EditaPessoa = () => {
  const { state } = useLocation()
  const { editaUsuario } = useContext(PessoaContext)

  const { register, handleSubmit } = useForm<IPessoas>({
    defaultValues: {
      nome: state.nome,
      dataNascimento: state.dataNascimento,
      email: state.email,
      cpf: state.cpf,
      idPessoa: state.idPessoa
    }
  })

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Edita Pessoas</h1>
          <div>
            <p>Digite seu nome:</p>
            <form
              onSubmit={handleSubmit((data: IPessoas) => editaUsuario(data))}
            >
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                {...register('nome')}
              />
              <p>Data de nascimento:</p>
              <input
                type="date"
                id="dataNascimento"
                {...register('dataNascimento')}
              />
              <p>CPF:</p>
              <input type="text" id="cpf" disabled {...register('cpf')} />
              <p>Email:</p>
              <input
                type="text"
                id="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
              <input className="button-cadastro" type="submit" value="Editar" />
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  )
}
