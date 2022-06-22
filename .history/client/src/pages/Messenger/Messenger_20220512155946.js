import React from 'react'

import './messenger.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'
import Conversation from 'components/Conversation/Conversation'
import Message from 'components/Message/Message'
import ChatOnline from 'components/ChatOnline/ChatOnline'

import { AuthContext } from '../../context/AuthContext'

import axios from 'axios'

const Messenger = ({ own }) => {
  const [conversations, setConversation] = React.useState([])
  const { user } = React.useContext(AuthContext)

  React.useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get('/conversations/' + user._id)
        setConversation(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getConversations()
  }, [user._id])
  return (
    <>
    <TopBar />
    <div className='messenger'>
        <div className='chat__menu'>
          <div className='chat__menu-wrapper'>
            <input placeholder='Search for friends' className='chat__menu-input' />
            {
              conversations.map((conversation) => (
                <Conversation conversation={conversation} />
              ))
            }   
          </div>
        </div>
        <div className='chat__box'>
          <div className='chat__box-wrapper'>
            <div className='chat__box-top'>
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className='chat__box-bottom'>
              <textarea className='chat__message-input' placeholder='Write something....'></textarea>
              <button className='chat__submit-button'>Send</button>
            </div>
          </div>
        </div>
        <div className='chat__online'>
          <div className='chat__online-wrapper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
    </div>
    </>
  )
}

export default Messenger