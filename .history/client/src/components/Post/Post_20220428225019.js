import React, { useState, useEffect } from 'react'
import { MoreVert } from '@material-ui/icons'

import '../Post/post.scss'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-route-dom'

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length)
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
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])
  return (
    <div className='post'> 
          <div className='post__wrapper'>
              <div className='post__top'>
                  <div className='post__top-left'>
                      <Link>
                        <img
                            src={user.profilePicture || PF + 'person/noAvatar.png'}
                            alt='img_profile'
                            className='post__profile-img'
                        />
                      </Link>                  
                      <span className='post__username'>
                         {user.username}
                      </span>
                      <span className='post__date'>{format(post.createdAt)}</span>
                  </div>
                  <div className='post__topRight'>
                      <MoreVert />
                  </div>
              </div>
              <div className='post__center'>
                  <span className='post__text'>{post?.desc}</span>
                 <img className='post__img' src={post.img} alt=''/>
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