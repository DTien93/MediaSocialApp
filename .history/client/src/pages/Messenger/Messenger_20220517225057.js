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
  const [onlineUsers, setOnlineUsers] = React.useState([])
  const [arrivalMessage, setArrivalMessage] = React.useState(null)
  const { user } = React.useContext(AuthContext)
  const scrollRef = React.useRef()
  const socket = React.useRef()


  React.useEffect(() => {
    socket.current = io('ws://localhost:8900')
    socket.current.on('getMessages', data => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createAt: Date.now()
      })
    })
  }, [])

  React.useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) && 
    setMessage(prev=>[...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  React.useEffect(() => {
    // Send data and images
    socket.current.emit('addUser', user._id)
    socket.current.on('getUsers', (users) => {
      setOnlineUsers(user.followings.filter(friend=>users.some((user)=>user.userId === friend)))
    })
  }, [user])

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

    const receiverId = currentChat.members.find(member=> member !== user._id)

    socket.current.emit('sendMessage', { 
      senderId: user._id,
      receiverId,
      text: newMessage,
    })

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
  }, [messages])
  
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
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id} 
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
    </div>
    </>
  )
}

export default Messenger