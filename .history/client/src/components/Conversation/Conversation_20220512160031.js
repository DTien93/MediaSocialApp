import React from 'react'

import './conversation.scss'

const Conversation = ({conversation}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
      <div className='conversation'>
          <img
              src={PF + 'person/noAvatar.png'}
              alt='img_conversation'
              className='conversation__img'
          />
          <span className='conversation__name'>Henry</span>
    </div>
  )
}

export default Conversation