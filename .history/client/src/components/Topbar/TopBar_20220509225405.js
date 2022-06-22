import React, { useContext } from 'react'

import { Search, Person, Chat, Notifications, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import '../TopBar/topbar.scss'
import { AuthContext } from 'context/AuthContext'

const TopBar = () => {
    const { user } = useContext(AuthContext) 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
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
                      <Link to={`/profile/${user.username}`}>
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
                      <Link to={`/profile/${user.username}`} style={{textDecoration: 'none', color:'white'}}>
                        <span className='topbar__setting'>{user.username}</span>
                      </Link>
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
                  <div className='topbar__icons-itemOut'>
                      <Link to='/login'>
                        <ExitToApp  style={{ marginLeft: '30px'}} />
                      </Link>
                  </div>   
              </div>
          </div>
    </div>
  )
}

export default TopBar                                                                                                                                                                           