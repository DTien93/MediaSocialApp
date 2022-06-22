import React from 'react'
import './chatonline.scss'

const ChatOnline = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='chatOnline'>
          <div className='chatOnline__friend'>
              <div className='chatOnline__imgContainer'>
                  <img className='chatOnline__img' src={PF + 'person/noAvatar.png'} alt='imgContainer' />
                  <div className='chatOnline__badge'>
                        1
                  </div>
              </div>
              <span className='chatOnline__name'>John DOe</span>
        </div>
    </div>
  )
}

export default ChatOnline