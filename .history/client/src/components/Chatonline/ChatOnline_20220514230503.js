import React from 'react'
import axios from 'axios'

import './chatonline.scss'


const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = React.useState([])
  const [onlineFriends, setOnlineFriend] = React.useState([])

  React.useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get('/users/friends/' + currentId)
        setFriends(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFriends()
  }, [currentId])

  React.useEffect(() => { 

  }, [])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className='chatOnline'>
          <div className='chatOnline__friend'>
              <div className='chatOnline__imgContainer'>
                  <img className='chatOnline__img' src={PF + 'person/noAvatar.png'} alt='imgContainer' />
                  <div className='chatOnline__badge'></div>
              </div>
              <span className='chatOnline__name'>John DOe</span>
        </div>
    </div>
  )
}

export default ChatOnline