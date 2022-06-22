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
                  Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor Lorem ipsum dolor sit am Lorem ips
              </p>
          </div>
        <div className='message__bottom'>{message.createdAt} </div>  
    </div>
  )
}

export default Message