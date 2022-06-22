import React, { useState, useEffect } from 'react'
import { MoreVert } from '@material-ui/icons'

import '../Post/post.scss'
import axios from 'axios'


const Post = ({post}) => {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = 'assets/'

    const onHandleLike = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`users/${post.userId}`)
        }
    }, [])
  return (
    <div className='post'> 
          <div className='post__wrapper'>
              <div className='post__top'>
                  <div className='post__top-left'>
                      <img
                          src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
                          alt='img_profile'
                          className='post__profile-img'
                      />
                      <span className='post__username'>
                         {Users.filter((u) => u.id === post?.userId)[0].username}
                      </span>
                      <span className='post__date'>{post.date}</span>
                  </div>
                  <div className='post__topRight'>
                      <MoreVert />
                  </div>
              </div>
              <div className='post__center'>
                  <span className='post__text'>{post?.desc}</span>
                 <img className='post__img' src={PF+post.photo} alt=''/>
              </div>
              <div className='post__bottom'>
                <div className='post__bottom-left'>
                      <img
                          className='post__likeIcon'
                          src='assets/like.png'
                          alt='iconLike'
                          onClick={onHandleLike}
                        />
                      <img
                          className='post__likeIcon'
                          src='assets/heart.png'
                          alt='iconHeart'
                          onClick={onHandleLike}
                      />
                      <span className='post__likeCounter'>{like} people like it</span>  
                  </div>
                  <div className='post__bottom-right'>
                      <span className='post__comment-text'>
                          {post.comment} comments
                      </span>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Post