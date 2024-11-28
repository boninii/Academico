import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import Navigation from '../../componentes/mensagem/Navigation'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'
import TabelaPaginadaCliente from '../../componentes/tabela/TabelaPaginadaCliente'

const headers = [
  {
    nome: 'id',
    field: 'idUsuario',
    sort: false,
    print: false
  },
  {
    nome: 'Foto',
    field: 'foto',
    sort: false,
    print: true
  },
  {
    nome: 'Código',
    field: 'codUsuario',
    sort: true,
    print: true
  },
  {
    nome: 'E-mail',
    field: 'email',
    sort: true,
    print: true
  },
  {
    nome: 'Tipo',
    field: 'tipo',
    sort: true,
    print: true
  },
  {
    nome: 'Cidade',
    field: 'nomeCidade',
    sort: false,
    print: true
  },
];

const ListaPaginadaCliente = () => {
  return (
    <>
        <Navigation
            titulo="Usuário"
            iconTitulo={<FaIcons.FaUserAlt size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Listagem de Usuários | Paginação no Cliente"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            caminho="Usuário"
            url="/dashboard"
            tituloUrl="Página Principal"
        />
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-8'>
            <div className='app-windows'>
              <TabelaPaginadaCliente 
                headers={headers}
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default ListaPaginadaCliente
