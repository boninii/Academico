import React, { useState } from 'react'

import Header from './header/Header'
import Sidebar from './menu/Sidebar'

import './layout.css'

const Layout = ({children}) => {

    const [toggle, setToggle] = useState(false);

    const toggleClick = () => {
        setToggle(!toggle);
        console.log("Valor do toggle no layout: ", toggle)
    }

    return (
        <div>
            <>
                <Header toggleHeader={toggleClick} />
                <Sidebar toggleSidebar={toggle} />
                <main className={toggle ? 'app-content active' : 'app-content' }>
                    {children}
                </main>
            </>
        </div>
    )
}

export default Layout
