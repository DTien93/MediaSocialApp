import React from 'react'


const Online = ({user}) => {
  return (
      <li className='rightBarFriend'>
          <div className='rightBarProfile__Container'>
              <img
                  className='rightBarProfile__Img'
                  src={user.profilePicture}
                  alt='profilePicture'
              />
              <span className='rightBar__Username'>{user.username}</span>
          </div>
    </li>
  )
}

export default Online