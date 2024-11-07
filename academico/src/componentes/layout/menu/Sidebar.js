import React from 'react';

import './Sidebar.css';
import ShowItems from './ShowItems';

import Items from './SidebarData';

const Sidebar = ({toggleSidebar}) => {
    return (
        <>
            <div className={toggleSidebar ? 'app-sidebar-active' : 'app-sidebar'}>
                {
                    Items.map((Item, index) => {
                        return (
                            <ShowItems
                                key={index}
                                Item={Item}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sidebar
