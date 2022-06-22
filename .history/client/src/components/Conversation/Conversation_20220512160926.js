import React from 'react'

import './conversation.scss'

import axios from 'axios'

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = React.useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  React.useEffect(() => {
    const friendId = conversation.members.find(member => member !== currentUser._id)

    const getUser = async () => {
      try {
        const res = await axios.get('/users?userId=' + friendId)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [currentUser, conversation])
  return (
      <div className='conversation'>
          <img
              src={PF + 'person/noAvatar.png'}
              alt='img_conversation'
              className='conversation__img'
          />
          <span className='conversation__name'>Henry</span>
    </div>
  )
}

export default Conversation