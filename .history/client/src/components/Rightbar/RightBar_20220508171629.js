import React, { useEffect } from 'react'

import { Users } from '../../dummyData'
import Online from '../Online/Online'

import '../RightBar/rightbar.scss'

export default function RightBar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const getFriends = async () => { 
      
    }
  }, [])
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthday__container'>
          <img className='birthday__img' src={PF + 'gift.png'} alt='' />
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

  const ProfileRightBar = ({user}) => {
    return (
      <>
        <h4 className='rightBar__title'>User information</h4>
        <div className='rightBar__info'>
          <div className='rightBar__infoItem'>
            <span className='rightBar__infoKey'>City:</span>
            <span className='rightBar__infoValue'>{user.city}</span>
          </div>
          <div className='rightBar__infoItem'>
            <span className='rightBar__infoKey'>From:</span>
            <span className='rightBar__infoValue'>{user.from}</span>
          </div>
          <div className='rightBar__infoItem'>
            <span className='rightBar__infoKey'>Relationship:</span>
            <span className='rightBar__infoValue'>{user.relationship}</span>
          </div>
          <h4 className='rightBar__title'>User friends</h4>
          <div className='rightBar__followings'>
            <div className='rightBar__following'>
              <img
                    src={PF + '/person/3.jpeg'}
                alt=''
                className='rightBar__followingImg'
              />
              <span className='rightBar__followingName'>Henry</span>
            </div>
            <div className='rightBar__following'>
              <img
                src={PF + '/person/1.jpeg'}
                alt=''
                className='rightBar__followingImg'
              />
              <span className='rightBar__followingName'>Henry</span>
            </div>
            <div className='rightBar__following'>
              <img
                  src={PF + '/person/1.jpeg'}
                alt=''
                className='rightBar__followingImg'
              />
              <span className='rightBar__followingName'>Henry 4</span>
            </div>
            <div className='rightBar__following'>
              <img
                    src={PF + '/person/1.jpeg'}
                alt=''
                className='rightBar__followingImg'
              />
              <span className='rightBar__followingName'>Henry 3</span>
            </div>
            <div className='rightBar__following'>
              <img
                    src={PF + '/person/1.jpeg'}
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
  return (
    <div className='rightBar'>
      <div className='rightBar__wrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
