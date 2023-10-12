import React, { useEffect, useMemo } from 'react'
import { PessoaContext } from '../../Context/PessoaContext'
import { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export const PessoaPaginacao = () => {
  const { totalPages, buscarDadosPessoa } = useContext(PessoaContext)
  const [searchParam] = useSearchParams()
  const pageNumber = searchParam.get('page') || '1'

  const pages = useMemo(() => {
    const pageList: number[] = []
    for (let i = 1; i <= totalPages; i++) {
      pageList.push(i)
    }
    return pageList
  }, [totalPages])

  useEffect(() => {
    buscarDadosPessoa(pageNumber)
  }, [pageNumber])

  return (
    <div>
      {pages.map(item => (
        <Link key={item} to={`/Home?page=${item}`}>
          {item}
        </Link>
      ))}
    </div>
  )
}
