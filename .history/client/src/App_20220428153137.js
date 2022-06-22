import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Message from './pages/Message/Messenger'
import Register from './pages/Register/Register'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='profile/:username' element={<Profile />} />
        <Route path='/message' element={<Message/> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App