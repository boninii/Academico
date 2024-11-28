import React from 'react'

const TabelaHeader = ({headers}) => {
  return (
    <>
        <thead className='cf'>
            <tr>
                {
                    headers.map((header) => (
                        (header.print !== false) && (
                            <th>
                                {
                                    header.nome
                                }
                            </th>
                        )
                    ))
                }
                <th className='app-cabecalho-tabela p-3 mb-2 bg-success text-white'>
                    Ações
                </th>
            </tr>
        </thead>
    </>
  )
}

export default TabelaHeader
