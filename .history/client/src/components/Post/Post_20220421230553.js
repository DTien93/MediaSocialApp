import React, { useState } from 'react'
import { MoreVert } from '@material-ui/icons'

import '../Post/post.scss'

import { Users } from '../../dummyData'

const Post = () => {
    const [like, setLike] = useState()
    const [isLiked, setIsLiked] = useState(false)
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
                  <div className='post__topRight'>
                      <MoreVert />
                  </div>
              </div>
              <div className='post__center'>
                  <span className='post__text'></span>
                  <span className='post__photo'></span>
              </div>
              <div className='post__bottom'>
                <div className='post__bottom-left'>
                    <img src='' alt='' />
                    <img src='' alt='' />
                      <span className='postLikeCounter'>1 people like it</span>  
                  </div>
                  <div className='post__bottom-right'>
                      <span className='post__comment-text'>
                          comments
                      </span>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Post