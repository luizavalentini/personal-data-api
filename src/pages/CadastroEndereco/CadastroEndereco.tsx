import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { EnderecoContext } from '../../Context/EnderecoContext'
import { IEndereco } from '../../utilidade/interface'
import { ContainerCadastro } from './CadastroEndereco.style'
import InputMask from 'react-input-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import { enderecoFormSchema } from '../../utilidade/schemas'

export const CadastroEndereco = () => {
  const { state } = useLocation()
  const { criaEnderecoPessoa, pegaCep, dadosApi  } = useContext(EnderecoContext)

  const {
    register,
    handleSubmit,
    watch, setValue,
    formState: { errors }
  } = useForm<IEndereco>({
    resolver: yupResolver(enderecoFormSchema)
  })
  const cep = watch("cep");

  useEffect(() => {
    setValue("logradouro",  dadosApi?.logradouro);
    setValue("cidade",  dadosApi?.localidade);
    setValue("estado",  dadosApi?.uf)
  }, [dadosApi])


  return (
    <>
      <ContainerCadastro>
        <div className="ContainerMenor">
          <h1>Cadastro de endereço:</h1>
          <div>
            <form
              onSubmit={handleSubmit((data: IEndereco) =>
                criaEnderecoPessoa(data, state.idPessoa)
              )}
            >
              <p>Tipo do endereço:</p>
              <select id="tipo" {...register('tipo')}>
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
              </select>
              <p>CEP:</p>
              {/* <input
                type="text"
                id="cep"
                placeholder="Cep"
                {...register('cep')}
              />{' '} */}
              <InputMask
                mask="99999-999"
                type="text"
                id="cep"
                {...register('cep')}
                onBlur={() => pegaCep(cep)}
              />
              {errors.cep && (
                <p className="erro-mensage">{errors.cep.message}</p>
              )}
              <p>Logradouro:</p>
              <input
                type="text"
                id="logradouro"
                placeholder="Digite o seu logradouro"
                {...register('logradouro')}
              />{' '}
              {errors.logradouro && <p>{errors.logradouro.message}</p>}
              <p>Número</p>
              <input
                type="number"
                id="numero"
                placeholder="Digite o seu número"
                {...register('numero')}
              />{' '}
              {errors.numero && (
                <p className="erro-mensage">{errors.numero.message}</p>
              )}
              <p>Complemento</p>
              <input
                type="text"
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}
              />{' '}
              {errors.complemento && (
                <p className="erro-mensage">{errors.complemento.message}</p>
              )}
              <p>Cidade</p>
              <input
                type="text"
                id="cidade"
                placeholder="Digite sua Cidade"
                {...register('cidade')}
              />{' '}
              {errors.cidade && (
                <p className="erro-mensage">{errors.cidade.message}</p>
              )}
              <p>Estado:</p>
              <input
                type="text"
                id="estado"
                placeholder="Digite seu estado"
                {...register('estado')}
              />{' '}
              {errors.estado && (
                <p className="erro-mensage">{errors.estado.message}</p>
              )}
              <p>País:</p>
              <input
                type="text"
                id="pais"
                placeholder="Digite seu estado"
                {...register('pais')}
              />{' '}
              {errors.pais && (
                <p className="erro-mensage">{errors.pais.message}</p>
              )}
              <button type="submit" value="Cadastrar">
                Cadastrar Endereço
              </button>
            </form>
          </div>
        </div>
      </ContainerCadastro>
    </>
  )
}
