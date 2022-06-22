import React from 'react'

import '../Register/register.scss'

const Register = () => {
  return (
    <div className='login'>
    <div className='login__wrapper'>
        <div className='login__left'>
            <h3 className='login__logo'>Facebook</h3>
            <span className='login__desc'> Connect with friends and the world around you on Facebook.</span>
        </div>
        <div className='login__right'>
            <div className='login__box'>
                <input type='text' placeholder='Username' className='login__input' />
                <input type='email' placeholder='Email' className='login__input' />
                <input type='password' placeholder='Password' className='login__input' />
                <input type='password' placeholder='Password again' className='login__input' />
                <button className='login__button'>Sign Up</button>
                      <button className='login__register'>
                          Login account
                      </button>
            </div>
       </div> 
  </div>
</div>
  )
}

export default Register