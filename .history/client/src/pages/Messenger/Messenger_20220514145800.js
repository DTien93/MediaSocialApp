import React from 'react'

import './messenger.scss'
// Components
import TopBar from '../../components/TopBar/TopBar'
import Conversation from 'components/Conversation/Conversation'
import Message from 'components/Message/Message'
import ChatOnline from 'components/ChatOnline/ChatOnline'

import { AuthContext } from '../../context/AuthContext'
import { io } from 'socket.io-client' 
import axios from 'axios'

const Messenger = ({ own }) => {
  const [conversations, setConversation] = React.useState([])
  const [currentChat, setCurrentChat] = React.useState(null)
  const [messages, setMessage] = React.useState([])
  const [newMessage, setNewMessage] = React.useState('')
  const { user } = React.useContext(AuthContext)
  const scrollRef = React.useRef()

  React.useEffect(() => {
    setSocket(io('ws://localhost:8900'))
  }, [])


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

  React.useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('/messages/' + currentChat?._id)
        setMessage(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMessages()
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId : currentChat._id
    }
    try {
      const res = await axios.post('/messages', message)
      setMessage([...messages, res.data])
      setNewMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth'})
  },[messages])
  return (
    <>
    <TopBar />
    <div className='messenger'>
        <div className='chat__menu'>
          <div className='chat__menu-wrapper'>
            <input placeholder='Search for friends' className='chat__menu-input' />
            {
              conversations.map((conversation) => (
                <div onClick={() => setCurrentChat(conversation)}>
                  <Conversation conversation={conversation} currentUser={user} />
                </div>
              ))
            }   
          </div>
        </div>
        <div className='chat__box'>
          <div className='chat__box-wrapper'>
            {
              currentChat ?
            <>
            <div className='chat__box-top'>
              { messages.map((message) => (
                    <div ref={scrollRef}>
                      <Message message={message} own={message.sender === user._id} />
                    </div>              
               ))
              }      
            </div>
            <div className='chat__box-bottom'>
              <textarea
                  className='chat__message-input'
                  placeholder='Write something....'
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
              >
                </textarea>
              <button className='chat__submit-button' onClick={handleSubmit}>Send</button>
                  </div></> : <span className='noConversation__text'>Open a conversation to start a chat.</span>}
           
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