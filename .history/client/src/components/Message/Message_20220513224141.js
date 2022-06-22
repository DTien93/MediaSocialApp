import React from 'react'

import './message.scss'

const Message = ({own, message}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className={own ? 'message own' : 'message'}>
          <div className='message__top'>
              <img
                className='message__img'
                src={PF + 'person/noAvatar.png'}
                alt='message__img'
              />
              <p className='message__text'>
                 {message.text}
              </p>
          </div>
        <div className='message__bottom'>{message.createdAt} </div>  
    </div>
  )
}

export default Message