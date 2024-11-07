import React from 'react'
import Navigation from '../../componentes/mensagem/Navigation'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../../config/Config'

const Alterar = () => {
  return (
    <>
        <Navigation
            titulo="Usuário"
            iconTitulo={<FaIcons.FaUserEdit size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Manutenção do Cadastro de Usuários"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            caminho="Usuário"
            url="/usuario/listar"
            tituloUrl="Listagem de Usuários"
        />
    </>
  )
}

export default Alterar
