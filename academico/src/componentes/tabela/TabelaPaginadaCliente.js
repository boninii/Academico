import React from 'react'
import Table from '../table/Table'
import TabelaHeader from '../table/TabelaHeader'
import TableBody from '../table/TableBody'

const TabelaPaginadaCliente = ({headers, data}) => {
  return (
    <>
      <Table>
        <TabelaHeader 
          headers={headers}
        />
        <TableBody 
          headers={headers}
          currentRecords={data}
        />
      </Table>   
    </>
  )
}

export default TabelaPaginadaCliente
