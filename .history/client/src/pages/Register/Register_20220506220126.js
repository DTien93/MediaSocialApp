import React, { useRef } from 'react'

import '../Register/register.scss'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()

  const onHandleRegister = (e) => {
    e.preventDefault()
    if (password.current.value !== passwordAgain.current.value) {}
  }

  return (
    <div className='Register'>
    <div className='Register__wrapper'>
        <div className='Register__left'>
            <h3 className='Register__logo'>Facebook</h3>
            <span className='Register__desc'> Connect with friends and the world around you on Facebook.</span>
        </div>
        <div className='Register__right'>
            <form className='Register__box' onSubmit={onHandleRegister}>
                <input
                    type='text'
                    required 
                    placeholder='Username'
                    className='Register__input'
                    ref={username}
                />
                <input
                    type='email'
                    placeholder='Email'
                    className='Register__input'
                    ref={email}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='Register__input'
                    ref={password}
                    minLength='6'
                    required
                />
                <input
                    type='password'
                    placeholder='Password again'
                    className='Register__input'
                    ref={passwordAgain}
                    required
                 />
                <button className='Register__button' type='submit'>Sign Up</button>
                <button className='Register__register'>
                        Log into Account
                </button>
            </form>
       </div> 
  </div>
</div>
  )
}

export default Register