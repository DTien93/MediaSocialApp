import React from 'react'
import axios from 'axios'

import './chatonline.scss'


const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = React.useState([])
  const [onlineFriends, setOnlineFriends] = React.useState([])

  const PF = process.env.REACT_APP_PUBLIC_FOLDER 

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
    setOnlineFriends(friends.filter((friend) => onlineUsers.includes(friend._id)))
  }, [friends, onlineUsers])
  
  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      )
      setCurrentChat(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(onlineFriends)

  return (
    <div className='chatOnline'>
      {
        onlineFriends.map((online) => (
          <div className='chatOnline__friend' onClick={() => handleClick(online)}>
              <div className='chatOnline__imgContainer'>
                  <img className='chatOnline__img' src={online?.profilePicture ? PF + online.profilePicture : PF + 'person/noAvatar.png'} alt='imgContainer' />
                  <div className='chatOnline__badge'></div>
              </div>
            <span className='chatOnline__name'>{online?.username}</span>
        </div>
        ))
      }        
    </div>
  )
}

export default ChatOnline