import React from 'react'

import { Search, Person, Chat, Notifications } from '@material-ui/icons'

const TopBar = () => {
  return (
      <div className='topbar__container'>
          <div className='topbar__left'>
              <span className='topbar__left-logo'>Media social</span>
          </div>
          <div className='topbar__center'>
              <div className='topbar__center-searchbar'>

                  <input
                      type='input'
                      className='topbar__center-searchinput'
                      placeholder='Search for friend, post or video'
                  />
              </div>
          </div>
          <div className='topbar__right'>
              <div className='topbar__right-links'>
                  <span className='topbar__right-link'>Home</span>
                  <span className='topbar__right-link'>Timeline</span>
              </div>
              <div className='topbar__icons'>
                  <div className='topbar__icons-item'>
                      <Person />
                      <span className='topbar__icon-badge'>1</span>
                </div>
                <div className='topbar__icons-item'>
                      <Chat />
                      <span className='topbar__icon-badge'>2</span>
                  </div>
                  <div className='topbar__icons-item'>
                      <Notifications />
                      <span className='topbar__icon-badge'>1</span>
                  </div>
                  <img src=''></img>
              </div>
          </div>
    </div>
  )
}

export default TopBar                                                                                                                                                                           