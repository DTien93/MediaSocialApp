import React from 'react'
import './chatonline.scss'

const ChatOnline = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='chatOnline'>
          <div className='chatOnline__friend'>
              <div className='chatOnline__imgContainer'>
                  <img src='' alt='' />
                  <div className='chatOnline__badge'>

                  </div>
              </div>
        </div>
    </div>
  )
}

export default ChatOnline