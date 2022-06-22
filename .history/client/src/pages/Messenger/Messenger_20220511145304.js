import React from 'react'

import './message.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'

const Messenger = () => {
  return (
    <>
    <TopBar />
    <div className='messenger'>
      <div className='chat__menu'></div>
    </div>
    </>
  )
}

export default Messenger