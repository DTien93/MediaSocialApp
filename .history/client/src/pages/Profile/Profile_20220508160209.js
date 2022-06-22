import React, { useState, useEffect } from 'react'

import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import RightBar from '../../components/RightBar/RightBar'

import '../Profile/profile.scss'
import { useParams} from 'react-router'

import axios from 'axios'

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({})

    const username = useParams().username
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`)
            setUser(res.data)
            console.log(res.data)
        }
        fetchUser()
    }, [username])

  return (
      <>
        <TopBar />
          <div className='profile'>
              <Sidebar />
              <div className='profile__right'>
                  <div className='profile__right-top'>
                      <div className='profile__right-cover'>
                          <img
                              className='profile__cover-img'
                              src={user.coverPicture ? PF+user.coverPicture : PF+'person/noCover.png'}
                              alt=''
                          />
                           <img
                              className='profile__cover-img'
                              src={PF + `person/3.jpeg`}
                              alt=''
                          />
                      </div>
                      <div className='profile__info'>
                          <h4 className='profile__info-name'>{user.username}</h4>
                          <span className='profile__info-desc'>{user.desc}</span>
                      </div>
                  </div>
                  <div className='profile__right-bottom'>
                      <Feed username={username} />
                      <RightBar user={user} />
                  </div>
              </div>
        </div>
    </>
  )
}

export default Profile