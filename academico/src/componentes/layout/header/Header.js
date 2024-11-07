import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { DEFAULT_IMAGEM_THUMBNAIL } from '../../../config/Config';

import './header.css';

const Header = ({toggleHeader}) => {
    
    const [toggle, setToggle] = useState(true); 

    const toggleClick = () => {
        setToggle(!toggle);
        console.log("Valor da variável toggle no header", toggle)
        toggleHeader(toggle);
    }

  return (
    <>
        <header className='app-header'>
            <div className='app-leftarea'>
                <h4>SISTEMA<span>IFSP</span>
                </h4>
            </div>
            <div className='app-toggle'>
                <i>
                    <FaIcons.FaBars onClick={() => toggleClick()}/>
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
