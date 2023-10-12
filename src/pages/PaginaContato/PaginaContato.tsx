import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { ContainerGeral, ContainerHome } from './Contato.style'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IContato, IContatoContext, IPessoas } from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'
import { FaAddressCard, FaAddressBook } from 'react-icons/fa'
import { ContatosContext } from '../../Context/ContatosContext'

export const PaginaContato = () => {
  const navigate = useNavigate()
  const { dadosContatos, buscarContatos } =
    useContext<IContatoContext>(ContatosContext)

  const { deletarContato } = useContext<IContatoContext>(ContatosContext)

  useEffect(() => {
    buscarContatos()
  }, [buscarContatos])

  return (
    <>
      <ContainerGeral>
        <Header />
        <ContainerHome>
          <div className="ContainerMenor">
            <h2>Lista de Contatos</h2>
            <div className="ContainerTabela">
              <div className="containerBotaoCadastro">
                <div>
                  <h3>Contato usuários</h3>
                </div>
              </div>
              <div className="classOverflow"></div>
              <table>
                <thead>
                  <th>TIPO DE CONTATO</th>
                  <th>TELEFONE</th>
                  <th>DESCRIÇÃO</th>

                  <th>↓</th>
                </thead>
                {dadosContatos?.map((contato: any) => {
                  return (
                    <tbody key={contato.idContato}>
                      <td>
                        <p>{contato.tipoContato}</p>
                      </td>
                      <td>
                        <p>{contato.telefone}</p>
                      </td>
                      <td>
                        <p>{contato.descricao}</p>
                      </td>

                      <td className="container-button">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit
                              onClick={() => {
                                navigate('/contato/edit', { state: contato })
                              }}
                            />
                          </i>
                        </button>

                        <button className="buttonTabela">
                          <i>
                            <RiDeleteBin6Fill
                              onClick={() => deletarContato(contato.idContato)}
                            />
                          </i>{' '}
                        </button>
                      </td>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
        </ContainerHome>
      </ContainerGeral>
    </>
  )
}
