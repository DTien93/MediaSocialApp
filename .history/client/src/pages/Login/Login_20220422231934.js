import React from 'react'

import '../Login/login.scss'

const Login = () => {
  return (
      <div className='login'>
          <div className='login__wrapper'>
              <div className='login__left'>
                  <h3 className='login__logo'>Facebook</h3>
                  <span className='login__desc'> Connect with friends and the world around you on Facebook.</span>
              </div>
              <div className='login__right'>
                  <div className='login__box'>
                      <input type='email' placeholder='Email' className='login__input' />
                      <input placeholder='Email' className='login__input'/>
                  </div>
             </div> 
        </div>
    </div>
  )
}

export default Login