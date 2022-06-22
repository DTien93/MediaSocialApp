import React, { useContext } from 'react'

import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import '../TopBar/topbar.scss'
import { AuthContext } from 'context/AuthContext'

const TopBar = () => {
    const { user } = useContext(AuthContext) 
    const PF = process.env.IMG_PUBLIC_URL 
  return (
      <div className='topbar__container'>
          <div className='topbar__left'>
              <Link to='/' style={{textDecoration: 'none'}}>
                  <span className='topbar__left-logo'>Facebook</span>
              </Link>        
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
                      <img
                          className='topbar__img'
                          src={
                              user.profilePicture

                          
                          }
                          alt='img'
                      />
                      <span className='topbar__setting'>{user.username}</span>
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