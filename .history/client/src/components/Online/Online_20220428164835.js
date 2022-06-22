import React from 'react'

import '../Online/online.scss'

const Online = ({ user }) => {
  const PF = 'assets/'
  return (
      <li className='rightBarFriend'>
          <div className='rightBarProfile__Container'>
              <img
                  className='rightBarProfile__Img'
                  src={PF+user.profilePicture}
                  alt='profilePicture'
              />
              <span className='rightBar__online'></span>
              <span className='rightBar__username'>{user.username}</span>
          </div>
    </li>
  )
}

export default Online