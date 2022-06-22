import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from 'pages/Profile/Profile'
import Message from './pages/Message/Message'


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
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Register />} />
      <Route path='profile/:username' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App