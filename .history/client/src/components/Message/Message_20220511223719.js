import React from 'react'

import './message.scss'

const Message = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='message'>
          <div className='message__top'>
              <img
                className='message__img'
                src=''
                alt=''
              />
              <p>Hello this is a message</p>
          </div>
        <div className='message__bottom'></div>  
    </div>
  )
}

export default Message