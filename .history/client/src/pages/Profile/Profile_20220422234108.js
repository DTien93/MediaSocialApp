import React from 'react'

import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/RightBar/RightBar'

import '../Profile/profile.scss'

const Profile = () => {
  return (
      <>
        <TopBar />
          <div className='profile'>
              <Sidebar />
              <div className='profile__right'>
                  <div className='profile__right-top'>
                      <div className='profile__cover'>
                          <img
                              className='profile__coverImg'
                              src='assets/post/3.jpeg'
                              alt=''
                          />
                      </div>
                  </div>
              </div>
        </div>
    </>
  )
}

export default Profile