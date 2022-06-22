import React from 'react'

import './conversation.scss'

import axios from 'axios'

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = React.useState([])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  React.useEffect(() => {
    const friendId = conversation.members.find(member => member !== currentUser._id)

    console.log(friendId)

    const getUser = async () => {
      try {
        const res = await axios('/users?userId=' + friendId)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [currentUser, conversation])

  console.log(user)

  return (
      <div className='conversation'>
          <img
              src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
              alt='img_conversation'
              className='conversation__img'
          />
      <span className='conversation__name'>{user?.username}</span>
    </div>
  )
}

export default Conversation