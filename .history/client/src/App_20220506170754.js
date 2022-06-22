import React, { useContext } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Message from './pages/Message/Messenger'
import Register from './pages/Register/Register'

import { AuthContext } from './context/AuthContext'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
          { user ? <element={<Home />} : <element={<Login />}}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='profile/:username' element={<Profile />} />
        <Route path='/message' element={<Message/> }/>
    </Routes>
  </BrowserRouter>
  )
}

export default App