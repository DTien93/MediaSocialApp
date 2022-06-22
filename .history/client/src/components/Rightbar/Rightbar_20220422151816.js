import React from 'react'

import { Users } from '../../dummyData'
import Online from '../Online/Online'

const RightBar = ({profile}) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthday__container'>
          <img className='birthday__img' src='assets/gift.png' alt='' />
          <span className='birthday__text'>
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img src='assets/ad.png' alt='' className='rightBar__add' />
        <h4 className='rightBar__title'>Online Friend</h4>
        <ul className='rightBar__friendList'>
          {
            Users.map((user) => (
              <Online key={user.id} user={user} />
            ))
          }
        </ul>
      </>
    )
  }
}

const ProfileRightBar = () => {
  return (
    <>
      <h4 className='rightBar__Title'>User information</h4>
      </>
    )
  }
export default RightBar