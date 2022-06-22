import React from 'react'

import '../Closefriend/closefriend.scss'

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className='sidebar__Friend'>
          <img className='sidebar__Friend-img' src={PF + user.profilePicture} alt='' />
          <span className='sidebar__Friend-name'>{user.username}</span>
    </li>
  )
}

export default CloseFriend