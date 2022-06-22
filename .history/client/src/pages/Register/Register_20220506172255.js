import React, { useRef } from 'react'

import '../Register/register.scss'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()

  const onHandleRegister = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='Register'>
    <div className='Register__wrapper'>
        <div className='Register__left'>
            <h3 className='Register__logo'>Facebook</h3>
            <span className='Register__desc'> Connect with friends and the world around you on Facebook.</span>
        </div>
        <div className='Register__right'>
            <div className='Register__box'>
                <input
                    type='text'
                    placeholder='Username'
                    className='Register__input'
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='Register__input' 
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='Register__input'
                />
                <input
                    type='password'
                    placeholder='Password again'
                    className='Register__input'
                 />
                <button className='Register__button'>Sign Up</button>
                      <button className='Register__register'>
                        Log into Account
                      </button>
            </div>
       </div> 
  </div>
</div>
  )
}

export default Register