import React from 'react'

import './messenger.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'
import Conversation from 'components/Conversation/Conversation'

const Messenger = () => {
  return (
    <>
    <TopBar />
    <div className='messenger'>
        <div className='chat__menu'>
          <div className='chat__menu-wrapper'>
            <input placeholder='Search for friends' className='chat__menu-input' />
            <Conversation />
          </div>
        </div>
        <div className='chat__box'>
          <div className='chat__box-wrapper'>
            Box
          </div>
        </div>
        <div className='chat__online'>
          <div className='chat__online-wrapper'>
              Online
          </div>
        </div>
    </div>
    </>
  )
}

export default Messenger