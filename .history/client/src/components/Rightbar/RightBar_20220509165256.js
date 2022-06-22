import React, { useEffect, useState, useContext } from 'react'

import { Users } from '../../dummyData'
import Online from '../Online/Online'

import '../RightBar/rightbar.scss'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Add, Remove } from '@material-ui/icons'

export default function RightBar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext)
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user._id)
        setFriends(friendList.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFriends()
  }, [user])


  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        })
        dispatch({type: 'UNFOLLOW', payload:user._id})
      } else {
        await axios.put('/users/' + user._id+'/follow', {
          userId: currentUser._id,
        })
        dispatch({type: 'FOLLOW', payload:user._id})
      }
      setFollowed(!followed)
    } catch (err) {
    }
  }

  const HomeRightBar = () => {
    return (
      <>
        <div className='birthday__container'>
          <img className='birthday__img' src={PF + 'gift.png'} alt='' />
          <span className='birthday__text'>
            <b>Henry Dev</b> and <b>3 other friends</b> have a birthday today.
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
        {user.username !== currentUser.username && (
          <button
            className='rightBar__FollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove/> : <Add/>}
          </button>
        )}
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
            <span className='rightBar__infoValue'>
            {user.relationship === 1
                ? 'Single'
                : user.relationship === 1
                ? 'Married'
                : '-'}
            </span>
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
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightBar'>
      <div className='rightBar__wrapper'>
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
