import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { ContatosContext } from '../../Context/ContatosContext'
import { IContato, IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from './CadastrarContatos.style'
import InputMask from 'react-input-mask'
import { ContatoSchema } from '../../utilidade/schemas'

export const CadastroContatos = () => {
  const { state } = useLocation()
  console.log(state)
  const { register, handleSubmit } = useForm<IContato>({
    resolver: yupResolver(ContatoSchema)
  })

  const { criarContatos } = useContext(ContatosContext)

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Cadastro de contato</h1>
          <div>
            <label htmlFor=""></label>
            <form
              onSubmit={handleSubmit(data =>
                criarContatos(data, state.idPessoa)
              )}
            >
              <label htmlFor="">Residência:</label>
              <select id="tipoContato" {...register('tipoContato')}>
                <option value="RESIDENCIAL">RESIDENCIAL</option>
                <option value="COMERCIAL">COMERCIAL</option>
              </select>

              <label htmlFor="">Telefone:</label>
              <InputMask
                mask="(99)99999-9999"
                type="text"
                id="telefone"
                {...register('telefone')}
                placeholder="Digite seu telefone"
              />
              <label htmlFor="">Descrição:</label>
              <input
                type="text"
                id="descricao"
                {...register('descricao')}
                placeholder="Digite a descrição, exemplo: Whatsapp"
              />
              <input
                className="button-cadastro"
                type="submit"
                value="Cadastrar"
              />
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  )
}
