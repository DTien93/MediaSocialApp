import React, { useState } from 'react'

import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'

import '../Profile/profile.scss'

const Profile = () => {
  const PF = '/assets/'
    const [user, setUser] = useState({})
  return (
      <>
        <TopBar />
          <div className='profile'>
              <Sidebar />
              <div className='profile__right'>
                  <div className='profile__right-top'>
                      <div className='profile__right-cover'>
                          <img
                              className='profile__cover-img'
                              src={PF + `person/3.jpeg`}
                              alt=''
                          />
                           <img
                              className='profile__cover-img'
                              src={PF + `person/3.jpeg`}
                              alt=''
                          />
                      </div>
                      <div className='profile__info'>
                          <h4 className='profile__info-name'>Henry</h4>
                          <span className='profile__info-desc'>Hello my friends !</span>
                      </div>
                  </div>
                  <div className='profile__right-bottom'>
                      <Feed username='admin' />
                      <RightBar profile />
                  </div>
              </div>
        </div>
    </>
  )
}

export default Profile