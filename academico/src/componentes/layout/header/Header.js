import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { DEFAULT_IMAGEM_THUMBNAIL } from '../../../config/Config';

import './header.css';

const Header = () => {
  return (
    <>
        <header className='app-header'>
            <div className='app-leftarea'>
                <h4>SISTEMA</h4>
                <span>IFSP</span>
            </div>
            <div className='app-toggle'>
                <i>
                    <FaIcons.FaBars/>
                </i>
            </div>
            <div className='app-profile'>
                <img src={DEFAULT_IMAGEM_THUMBNAIL} alt="Avatar"/>
                <span>Pedro Bonini</span>
                <div className='app-logout'>
                    <i>
                        <FaIcons.FaSignOutAlt/>
                    </i>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
