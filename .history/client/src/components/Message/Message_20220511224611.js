import React from 'react'

import './message.scss'

const Message = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
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
        <div className='message__bottom'>1 hour ago </div>  
    </div>
  )
}

export default Message