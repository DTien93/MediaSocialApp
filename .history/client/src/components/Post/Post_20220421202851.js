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
                          src={Users.filter((user) => user.id === post?.userId)[0].profilePicture)}
                          alt='img_profile'
                          className='post__profile-img'
                      />
                      <span className='post__username'>
                        
                      </span>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Post