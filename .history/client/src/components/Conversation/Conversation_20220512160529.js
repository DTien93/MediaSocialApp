import React from 'react'

import './conversation.scss'

import axios from 'axios'

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const friendId = conversation.member.find(member => member !== currentUser._id)

    const getUser = async () => {
      try {
        
      } catch (err) {
        console.log(err)
      }
    }
  }, [])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
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