import React from 'react'

const TableBody = ({headers, currentRecords}) => {
  return (
    <tbody>
        {
          currentRecords.length > 0 ? (
            currentRecords.map((registro, index) => (
              <tr key={index} className='app-coluna-detalhe-centro app-label'>
                {
                  headers.map((header, colIndex) => (
                    header.print !== false && (
                      <td key={colIndex} data-label={header.nome}>
                        {
                          header.formatter ? header.formatter(registro[header.field], registro) : registro[header.field]
                        }
                      </td>
                    )
                  ))
                }
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length + 1}>Nenhum registro encontrado!</td>
            </tr>
          )
        }
    </tbody>
  )
}

export default TableBody
