import React from 'react'
import Navigation from '../componentes/mensagem/Navigation'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { BUTTON_SIZE_SHOW_MESSAGE } from '../config/Config'

const Dashboard = () => {
  return (
    <>
        <Navigation
            titulo="Página principal"
            iconTitulo={<AiIcons.AiFillDashboard size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            descricao="Página principal do sistema"
            iconReturn={<MdIcons.MdList size={BUTTON_SIZE_SHOW_MESSAGE}/>}
            // caminho="xpto"
            url="/dashboard"
            tituloUrl="Página Principal"
        />
    </>
  )
}

export default Dashboard
