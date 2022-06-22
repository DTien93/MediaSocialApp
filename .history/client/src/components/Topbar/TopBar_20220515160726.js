import React, { useContext } from 'react'

import { Search, Person, Chat, Notifications, ExitToApp } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import '../TopBar/topbar.scss'
import { AuthContext } from 'context/AuthContext'

const TopBar = () => {
    const { user, dispatch } = useContext(AuthContext) 
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const handleLogout = () => {
        dispatch({type: 'LOG_OUT'})
    }
  return (
      <div className='topbar__container'>
          <div className='topbar__left'>
              <Link to='/' style={{textDecoration: 'none'}}>
                  <span className='topbar__left-logo'>Meta App</span>
                  <img src='data:image/png;base64,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' alt=''/>
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
                      <Link to ='/messenger' style={{textDecoration: 'none', color:'white'}}>
                      <Chat />
                      <span className='topbar__icon-badge'>2</span>
                     </Link>
                  </div>
                  <div className='topbar__icons-item'>
                      <Notifications />
                      <span className='topbar__icon-badge'>1</span>
                  </div>
                  <div className='topbar__icons-itemOut' onClick={handleLogout}>
                        { user && <ExitToApp  style={{ marginLeft: '30px', color: 'white'}} />}
                  </div>   
              </div>
          </div>
    </div>
  )
}

export default TopBar                                                                                                                                                                           