import { useContext, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { EnderecoContext } from '../Context/EnderecoContext'

export const EnderecoPagination = () => {
  const { totalDePaginas, listaEndereco } = useContext(EnderecoContext)

  const [searchParam] = useSearchParams()
  const numeroPagina = searchParam.get('page') || '1'

  const pages = useMemo(() => {
    const listaPaginas: number[] = []
    for (let i = 1; i <= totalDePaginas; i++) {
      listaPaginas.push(i)
    }
    return listaPaginas
  }, [totalDePaginas])

  useEffect(() => {
    listaEndereco(numeroPagina)
    console.log(numeroPagina)
  }, [numeroPagina])

  return (
    <div>
      {pages.map(item => (
        <Link key={item} to={`/PaginaEndereco?page=${item}`}>
          {item}
        </Link>
      ))}
    </div>
  )
}
