import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'

import { ContatosContext } from '../../Context/ContatosContext'
import { IContato, IPessoas } from '../../utilidade/interface'
import { ContainerCadastro } from './FormEditContatos.style'
import InputMask from 'react-input-mask'

export const FormEditContatos = () => {
  const { state } = useLocation()
  // console.log(state)
  const { register, handleSubmit } = useForm<IContato>({
    defaultValues: {
      tipoContato: state.tipoContato,
      telefone: state.telefone,
      descricao: state.descricao,
      idPessoa: state.idPessoa,
      idContato: state.idContato
    }
  })
  const { editarContatos } = useContext(ContatosContext)

  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Editar contato</h1>
          <div>
            <form onSubmit={handleSubmit(data => editarContatos(data))}>
              <select id="tipoContato" {...register('tipoContato')}>
                <option value="RESIDENCIAL">RESIDENCIAL</option>
                <option value="COMERCIAL">COMERCIAL</option>
              </select>

              <p>Telefone:</p>
              <InputMask
                mask="(99)99999-9999"
                type="text"
                id="telefone"
                {...register('telefone')}
              />
              <p>Descrição:</p>
              <input type="text" id="descricao" {...register('descricao')} />
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
