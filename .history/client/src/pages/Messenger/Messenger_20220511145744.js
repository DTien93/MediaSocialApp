import React from 'react'

import './messenger.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'

const Messenger = () => {
  return (
    <>
    <TopBar />
    <div className='messenger'>
        <div className='chat__menu'>
          <div className='chat__menu-wrapper'></div>
        </div>
        <div className='chat__box'>
          
        </div>
        <div className='chat__online'></div>
    </div>
    </>
  )
}

export default Messenger