import React from 'react'
import './chatonline.scss'

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = React.useState([])
  const [onlineFriends, setOnlineFriend] = React.useState([])

  React.useEffect(() => {
    const getFriends = async () => {
      try {

      } catch (err) {
        
      }
    }
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