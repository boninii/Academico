import React from 'react'
import Table from '../table/Table'
import TabelaHeader from '../table/TabelaHeader'
import TableBody from '../table/TableBody'

const TabelaPaginadaCliente = ({headers}) => {
  return (
    <>
      <Table>
        <TabelaHeader 
          headers={headers}
        />
        <TableBody 
          headers={headers}
        />
      </Table>   
    </>
  )
}

export default TabelaPaginadaCliente
