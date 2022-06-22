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
          </div>
    </li>
  )
}

export default Online