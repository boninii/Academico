import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import Navigation from '../../componentes/mensagem/Navigation'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'

const ListaPaginadaCliente = () => {
  return (
    <>
        <Navigation
            titulo="Usuário"
            iconTitulo={<FaIcons.FaUserAlt size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Listagem de Usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            caminho="Usuário"
            url="/dashboard"
            tituloUrl="Página Principal"
        />
    </>
  )
}

export default ListaPaginadaCliente
