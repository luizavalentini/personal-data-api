import React from 'react'
import { ContainerHeader } from './Header.style'
import { ContainerMenu } from './Header.style'
import imgLogo from '../../assets/logo-quadrado.svg'
import { useContext } from 'react'
import { UsuarioContext } from '../../Context/UsuarioContext'
import { GrLogout } from 'react-icons/gr'
import { Link } from 'react-router-dom'

import { FaAddressCard, FaAddressBook, FaUser } from 'react-icons/fa'

export const Header = () => {
  const { fazerLogout, token } = useContext(UsuarioContext)
  return (
    <>
      <ContainerHeader>
        <div className="ContainerLogout">
          <button className="iconLogout" onClick={fazerLogout}>
            <GrLogout size={20} />
          </button>
        </div>
        <ContainerMenu>
          <i>
            <img src={imgLogo} alt="" />
          </i>

          <div className="containerIcon">
            <p>Menu</p>
            <p>
              {' '}
              <i>
                <FaUser size={17} className="iconPeople" />
              </i>{' '}
              <Link to="/">Usuários</Link>
            </p>
            <p>
              <i>
                <FaAddressCard size={20} className="iconSearch" />
              </i>
              <Link to="/PaginaEndereco">Endereços</Link>
            </p>
            <p>
              <i>
                <FaAddressBook size={20} />
              </i>
              <Link to="/PaginaContato">Contatos</Link>
            </p>
          </div>
        </ContainerMenu>
      </ContainerHeader>
    </>
  )
}
