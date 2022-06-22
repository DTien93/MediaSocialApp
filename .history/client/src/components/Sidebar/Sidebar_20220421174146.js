import React from 'react'
import '../Sidebar/sidebar.scss'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <RssFeed className='sidebar__icon' />
            <span className='sidebar__listItem-text'></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar