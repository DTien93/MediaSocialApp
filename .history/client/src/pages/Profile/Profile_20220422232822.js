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
        </div>
    </>
  )
}

export default Profile