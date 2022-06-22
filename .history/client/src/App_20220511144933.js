import React, { useContext } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'
import Messenger from './pages/Messenger/Messenger'
import Register from './pages/Register/Register'

import { AuthContext } from './context/AuthContext'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/'   element={user ? <Home/> : <Login />}/>
        <Route exact path='/login'   element={user ? <Navigate to ='/'/> : <Login />}/>
        <Route exact path='/register'   element={user ? <Navigate to ='/'/> : <Register />}/>
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/messenger'   element={!user ? <Navigate to ='/'/> : <Messenger />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App