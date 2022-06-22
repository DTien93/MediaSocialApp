import React, { useRef, useContext } from 'react'

import '../Login/login.scss'
import { loginCall } from '../../utilities/apiCalls'
import {AuthContext} from '../../context/AuthContext'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch} = useContext(AuthContext)
    const onHandleLogin = (e) => { 
        e.preventDefault()
        loginCall({email, password}, dispatch)
    }
    console.log(user)
  return (
      <div className='login'>
          <div className='login__wrapper'>
              <div className='login__left'>
                  <h3 className='login__logo'>Facebook</h3>
                  <span className='login__desc'> Connect with friends and the world around you on Facebook.</span>
              </div>
              <div className='login__right'>
                  <form className='login__box' onSubmit={onHandleLogin}>
                      <input
                          type='email'
                          placeholder='Email'
                          className='login__input'
                          ref={email} 
                      />
                      <input
                          type='password'
                          placeholder='Password'
                          className='login__input'
                          required
                          minLength='6'
                          ref={password}
                      />
                      <button className='login__button'>Log In</button>
                      <span className='login__forgot'>Forgot Password</span>
                      <button className='login__register'>Create a New Account</button>
                  </form>
             </div> 
        </div>
    </div>
  )
}

export default Login