import React from 'react'

import './messenger.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'
import Conversation from 'components/Conversation/Conversation'
import Message from 'components/Message/Message'

const Messenger = () => {
  return (
    <>
    <TopBar />
    <div className='messenger'>
        <div className='chat__menu'>
          <div className='chat__menu-wrapper'>
            <input placeholder='Search for friends' className='chat__menu-input' />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className='chat__box'>
          <div className='chat__box-wrapper'>
            <div className='chat__box-top'>
              <Message />
              <Message />
              <Message />
            </div>
            <div className='chat__box-bottom'></div>
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