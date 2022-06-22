import React from 'react'

import '../Closefriend/closefriend.scss'

const CloseFriend = props => {
  const user  = props.user
  return (
    <li className='sidebar__Friend'>
          <img className='sidebar__Friend-img' src={user.profilePicture} alt='' />
          <span className='sidebar__Friend-name'>{user.username}</span>
    </li>
  )
}

export default CloseFriend