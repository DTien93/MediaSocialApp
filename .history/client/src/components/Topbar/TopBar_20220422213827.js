import React from 'react'

import { Search, Person, Chat, Notifications } from '@material-ui/icons'

import '../TopBar/topbar.scss'

const TopBar = () => {
  return (
      <div className='topbar__container'>
          <div className='topbar__left'>
              <span className='topbar__left-logo'>Facebook</span>
          </div>
          <div className='topbar__center'>
              <div className='topbar__center-searchBar'>
                <Search className='topbar__center-searchIcon'/>
                  <input
                      type='input'
                      className='topbar__center-searchInput'
                      placeholder='Search for friend, post or video'
                  />
              </div>
          </div>
          <div className='topbar__right'>
              <div className='topbar__right-links'>
                  <div className='topbar__right-setting'>
                  <img className='topbar__img' src='/assets/person/1.jpeg' alt='img' />
                  <span className='topbar__setting'>H</span>
                 </div>
                  {/* <span className='topbar__right-link'>Home</span>
                  <span className='topbar__right-link'>Timeline</span> */}
             
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
                 
              </div>
          </div>
    </div>
  )
}

export default TopBar                                                                                                                                                                           