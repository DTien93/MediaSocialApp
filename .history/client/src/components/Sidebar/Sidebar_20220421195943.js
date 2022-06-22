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

import { Users } from '../../dummyData'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <RssFeed className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Feed</span>
          </li>
          <li className='sidebar__list-item'>
            <RssFeed className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Feed</span>
          </li>
          <li className='sidebar__list-item'>
            <Chat className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Chats</span>
          </li>
          <li className='sidebar__list-item'>
            <PlayCircleFilledOutlined className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Videos</span>
          </li>
          <li className='sidebar__list-item'>
            <Group className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Groups</span>
          </li>
          <li className='sidebar__list-item'>
            <Bookmark className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Bookmarks</span>
          </li>
          <li className='sidebar__list-item'>
            <HelpOutline className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Questions</span>
          </li>
          <li className='sidebar__list-item'>
            <WorkOutline className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Jobs</span>
          </li>
          <li className='sidebar__list-item'>
            <Event className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Events</span>
          </li>
          <li className='sidebar__list-item'>
            <School className='sidebar__icon' />
            <span className='sidebar__listItem-text'>Courses</span>
          </li>
          <button>Show More</button>
          <hr className='sidebar__hr' />
          <ul className='sidebar__friendList'>
            {

            }
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar