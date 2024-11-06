import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './ShowItems.css'

const ShowItems = ({Item}) => {

  const [open, setOPen] = useState(false);
  
  if (Item.sub_menu) {
    return (
      <>
        <div className={open ? 'app-sidebar-item open' : 'app-sidebar-item'}>
          <div className='app-sidebar-title'>
            <span>
              {Item.icon && <i>{Item.icon}</i>}
              {Item.page}
            </span>
            <i>
              <BsIcons.BsChevronBarDown
                className='app-toggle-btn'
                onClick={() => setOPen(!open)}
              />
            </i>
          </div>
          <div className='app-sidebar-content'>
            {
              Item.sub_menu.map((sub, index) => {
                  return(
                    <ShowItems
                      key={index}
                      Item={sub}
                    />
                  )
                }
              )
            }
          </div>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <Link to={Item.path || '#'} className='app-sidebar-item plain'>
          {Item.icon && <i>{Item.icon}</i>}
          {Item.page}
        </Link>
      </>
    )
  }
}

export default ShowItems
