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
      <h4 className='rightBar__title'>User information</h4>
      <div className='rightBar__info'>
        <div className='rightBar__infoItem'>
          <span className='rightBar__infoKey'>City:</span>
          <span className='rightBar__infoValue'>HCM City</span>
        </div>
        <div className='rightBar__infoItem'>
          <span className='rightBar__infoKey'>From:</span>
          <span className='rightBar__infoValue'>Quy Nhon City</span>
        </div>
        <div className='rightBar__infoItem'>
          <span className='rightBar__infoKey'>Relationship:</span>
          <span className='rightBar__infoValue'>Singer</span>
        </div>
        <h4 className='rightBar__title'>User friends</h4>
        <div className='rightBar__followings'>
          <div className='rightBar__following'>
            <img
              src='assets/person/1.jpeg'
              alt=''
              className='rightBar__followingImg'
            />
            <span className='rightBar__followingName'>Henry</span>
          </div>
          <div className='rightBar__following'>
            <img
              src='assets/person/1.jpeg'
              alt=''
              className='rightBar__followingImg'
            />
            <span className='rightBar__followingName'>Henry</span>
          </div>
          <div className='rightBar__following'>
            <img
              src='assets/person/2.jpeg'
              alt=''
              className='rightBar__followingImg'
            />
            <span className='rightBar__followingName'>Henry 4</span>
          </div>
          <div className='rightBar__following'>
            <img
              src='assets/person/3.jpeg'
              alt=''
              className='rightBar__followingImg'
            />
            <span className='rightBar__followingName'>Henry 3</span>
          </div>
          <div className='rightBar__following'>
            <img
              src='assets/person/4.jpeg'
              alt=''
              className='rightBar__followingImg'
            />
            <span className='rightBar__followingName'>Henry 1</span>
          </div>
        </div>
      </div>
      </>
    )
  }
export default RightBar