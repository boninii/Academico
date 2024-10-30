import React from 'react';
import * as FaIcons from 'react-icons/fa';

import './header.css';

const Header = () => {
  return (
    <>
        <header className='app-header'>
            <div className='app-leftarea'>
                <h4>SISTEMA</h4>
            </div>
            <div className='app-toggle'>
                <i>
                    <FaIcons.FaBars/>
                </i>
            </div>
            <div className='app-profile'>
                <img src="" alt="Avatar"/>
                <span>Pedro Bonini</span>
            </div>
            <div className='app-logout'>
                <i>
                    <FaIcons.FaSignOutAlt/>
                </i>
            </div>
        </header>
    </>
  )
}

export default Header
