import React from 'react'
import { Link } from 'react-router-dom'

import './navigation.css'

const Navigation = ({titulo, iconTitulo, descricao, iconReturn, caminho, url, tituloUrl}) => {
  return (
    <>
        <div className='app-titulo-sistema'>
            <div>
                <h3>
                    <i>{iconTitulo}</i>
                    {titulo}
                </h3>
                <p>{descricao}</p>
            </div>
            <div className='font-navegacao'>
                <ul className='breadcrumb'>
                    <li className='breadcrumb-item'>
                        <i>{iconReturn}</i>
                    </li>
                    {
                        caminho ? <li className='breadcrumb-item'>{caminho}</li> : null
                    }
                    <li className='breadcrumb-item'>
                        <Link to={url}>
                            {tituloUrl}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navigation
