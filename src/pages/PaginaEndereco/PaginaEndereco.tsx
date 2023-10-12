import React, { useEffect, useMemo } from 'react'
import { useContext } from 'react'
import { ContainerGeral, ContainerHome } from './Endereco.style'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { FiEdit } from 'react-icons/fi'
import { IEndereco, IEnderecoContext } from '../../utilidade/interface'
import { Header } from '../../components/Header/Header'
import { FaAddressCard, FaAddressBook } from 'react-icons/fa'
import { EnderecoContext } from '../../Context/EnderecoContext'
import { EnderecoPagination } from '../../Paginacao/EnderecoPagination'

export const PaginaEndereco = () => {
  const navigate = useNavigate()
  const { dadosEnderecos, listaEndereco, deleteEndereco } =
    useContext<any>(EnderecoContext)

  useEffect(() => {
    listaEndereco('1')
  }, [])

  return (
    <>
      <ContainerGeral>
        <Header />
        <ContainerHome>
          <div className="ContainerMenor">
            <h2>Lista de Endereço</h2>
            <div className="ContainerTabela">
              <div className="containerBotaoCadastro">
                <div className="containerPag">
                  <EnderecoPagination />
                </div>
              </div>
              <div className="classOverflow"></div>
              <table>
                <tr>
                  <th>TIPO</th>
                  <th>LOGRADOURO</th>
                  <th>NUMERO</th>
                  <th>COMPLEMENTO</th>
                  <th>CEP</th>
                  <th>CIDADE</th>
                  <th>ESTADO</th>
                  <th>PAÍS</th>
                  <th>↓</th>
                </tr>
                {dadosEnderecos?.map((endereco: IEndereco) => {
                  return (
                    <tr>
                      <td>
                        <p>{endereco.tipo}</p>
                      </td>
                      <td>
                        <p>{endereco.logradouro}</p>
                      </td>
                      <td>
                        <p>{endereco.numero}</p>
                      </td>
                      <td>
                        <p>{endereco.complemento}</p>
                      </td>
                      <td>
                        <p>{endereco.cep}</p>
                      </td>
                      <td>
                        <p>{endereco.cidade}</p>
                      </td>
                      <td>
                        <p>{endereco.estado}</p>
                      </td>
                      <td>
                        <p>{endereco.pais}</p>
                      </td>
                      <td className="container-button">
                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <FiEdit
                              onClick={() => {
                                navigate('/people/edit/adress', {
                                  state: endereco
                                })
                              }}
                            />
                          </i>
                        </button>

                        <button className="buttonTabela">
                          {' '}
                          <i>
                            <RiDeleteBin6Fill
                              onClick={() =>
                                deleteEndereco(endereco.idEndereco)
                              }
                            />
                          </i>{' '}
                        </button>
                      </td>
                    </tr>
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
