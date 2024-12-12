import React, { useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import Navigation from '../../componentes/mensagem/Navigation'
import { BUTTON_SIZE_SHOW_MESSAGE, USUARIO } from '../../config/Config'
import TabelaPaginadaCliente from '../../componentes/tabela/TabelaPaginadaCliente'
import useApi from '../../service/AxiosService'

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
    nome: 'Nome',
    field: 'nomeUsuario',
    sort: false,
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
    print: true,
    formatter: (value) =>(
      <span className={`badge ${value === 1 ? "bg-success" : "bg-danger"}`}>
        { value === 1 ? "Professor" : "Aluno" }
      </span>
    )
  },
  {
    nome: 'Cidade',
    field: 'nomeCidade',
    sort: false,
    print: true 
  },
];

const ListaPaginadaCliente = () => {

  const {data, getData} = useApi();

  useEffect(() => {
    getData('/usuario/listar');
  }, [getData]);

  console.log(data);

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
                data={data}
                path={USUARIO}
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default ListaPaginadaCliente
