import React, { useContext } from 'react'

import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import '../TopBar/topbar.scss'
import { AuthContext } from 'context/AuthContext'

const TopBar = () => {
    const { user } = useContext(AuthContext) 
    const PF = '/assets/' 
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
                      <Link to={`/profile/$`}>
                      <img
                          className='topbar__img'
                          src={
                              user.profilePicture
                                  ? PF + user.profilePicture
                                  : PF + 'person/noAvatar.png'
                          }
                          alt='img'
                          />
                          </Link>
                      <span className='topbar__setting'>{user.username}</span>
                 </div>
             
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