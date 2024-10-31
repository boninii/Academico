import React, { useState } from 'react';
import * as BsIcons from 'react-icons/bs';

const [open, setOPen] = useState(false);

const ShowItems = ({Item}) => {
  
  if (Item.sub_menu) {
    return (
      <>
        <div className=''>
          <div className=''>
            <span>
              {Item.icon && <i>{Item.icon}</i>}
              {Item.page}
            </span>
            <i>
              <BsIcons.BsChevronBarDown
                className='app-toggle-btn'
              />
            </i>
          </div>
          <div className=''>
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
      </>
    )
  }
}

export default ShowItems
