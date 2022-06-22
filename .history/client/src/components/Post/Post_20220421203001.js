import React, { useState } from 'react'

import '../Post/post.scss'
import { Users } from '../../dummyData'

const Post = () => {

  return (
    <div className='post'> 
          <div className='post__wrapper'>
              <div className='post__top'>
                  <div className='post__top-left'>
                      <img
                          src=''
                          alt='img_profile'
                          className='post__profile-img'
                      />
                      <span className='post__username'>
                        Henry
                      </span>
                      <span className='post__date'>20/2/2022</span>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Post