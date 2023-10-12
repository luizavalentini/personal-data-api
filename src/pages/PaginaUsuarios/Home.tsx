import React, { useEffect } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PessoaContext } from '../../Context/PessoaContext'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IPessoas } from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'
import { FaAddressCard, FaAddressBook } from 'react-icons/fa'
import { PessoaPaginacao } from '../../components/Paginacao/PessoaPaginacao'
import { ContainerGeral, ContainerHome } from './Home.style'

export const Home = () => {
  const navigate = useNavigate()
  const { dadosPessoa, buscarDadosPessoa } = useContext<any>(PessoaContext)
  const { deletarUsuario } = useContext(PessoaContext)

  useEffect(() => {
    buscarDadosPessoa('1')
  }, [])

  return (
    <>
      <ContainerGeral>
        <Header />
        <ContainerHome>
          <div className="ContainerMenor">
            <h2>Lista de pessoas</h2>
            <div className="ContainerTabela">
              <div className="containerBotaoCadastro">
                <div>
                  <h3>Usuários</h3>
                </div>
                <div className="containerPaginacao">
                  <div className="containerPag">
                    <PessoaPaginacao />
                  </div>
                </div>
                <div>
                  <Link className="button-cadastro" to="/people/create">
                    {' '}
                    Cadastrar Pessoa
                  </Link>
                </div>
              </div>
              <div className="classOverflow"></div>
              <table>
                <thead>
                  <th>ID</th>
                  <th>NOME</th>
                  <th>DATA DE NASCIMENTO</th>
                  <th>CPF</th>
                  <th>EMAIL</th>
                  <th>↓</th>
                </thead>
                {dadosPessoa?.map((pessoa: IPessoas) => {
                  return (
                    <tbody key={pessoa.idPessoa}>
                      <td>
                        <p>{pessoa.idPessoa}</p>
                      </td>
                      <td>
                        <p>{pessoa.nome}</p>
                      </td>
                      <td>
                        <p>
                          {pessoa.dataNascimento.replace(
                            /(\d{4})-(\d{2})-(\d{2})/,
                            '$3/$2/$1'
                          )}
                        </p>
                      </td>
                      <td>
                        <p>
                          {pessoa.cpf.replace(
                            /(\d{3})(\d{3})(\d{3})(\d{2})/,
                            '$1.$2.$3-$4'
                          )}
                        </p>
                      </td>
                      <td>
                        <p>{pessoa.email}</p>
                      </td>
                      <td className="containerButton">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit
                              onClick={() => {
                                navigate('/people/edit', { state: pessoa })
                              }}
                            />
                          </i>
                        </button>
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FaAddressBook
                              onClick={() => {
                                navigate('/contato/create', { state: pessoa })
                              }}
                            />
                          </i>
                        </button>
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FaAddressCard
                              onClick={() => {
                                navigate('/people/create/adress', {
                                  state: pessoa
                                })
                              }}
                            />
                          </i>
                        </button>

                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <RiDeleteBin6Fill
                              onClick={() => deletarUsuario(pessoa.idPessoa)}
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
