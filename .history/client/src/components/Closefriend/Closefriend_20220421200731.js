import React from 'react'

import '../Closefriend/closefriend.scss'

const CloseFriend = props => {
  const user  = props.user
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className='sidebar__Friend'>
          <img className='sidebar__Friend-img' src={PF} alt='' />
          <span className='sidebar__Friend-name'></span>
    </li>
  )
}

export default CloseFriend