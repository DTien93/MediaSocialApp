import React, { useState, useEffect, useContext, useRef } from 'react'
import { MoreVert, Send } from '@material-ui/icons'

import '../Post/post.scss'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { AuthContext } from 'context/AuthContext'


const Post = ({post}) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [comments, setComments] = useState('') 
    const [user, setUser] = useState({})
    const desc = useRef()
    const { user:currentUser } = useContext(AuthContext)

    useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
      }, [currentUser._id, post.likes])
  
    const onHandleLike =  () => {
      try {
        axios.put('/posts/' + post._id + '/like', { userId: currentUser._id })
      } catch (err) {}
      setLike(isLiked ? like - 1 : like + 1)
      setIsLiked(!isLiked)
    }

    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`)
        setUser(res.data)
      }
      fetchUser()
    }, [post.userId])
  
    // Send comment
  const handleComment = async (e) => {
    e.preventDefault()
    const newComment = {
      userId: user._id,
      comment: desc.current.value
    }
    try {
      const res = await axios.post('/comments', newComment)
      setComments(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(comments)
  return (
    <div className='post'> 
          <div className='post__wrapper'>
              <div className='post__top'>
                  <div className='post__top-left'>
                      <Link to={`profile/${user.username}`} style={{textDecoration: 'none'}}>
                        <img
                            src={PF + user.profilePicture || PF + 'person/noAvatar.png'}
                            alt='img_profile'
                            className='post__profile-img'
                        />
                      </Link>                  
                      <span className='post__username'>
                         {user.username}
                      </span>
                      <span className='post__date'>{(post.createdAt).toString()}</span>
                  </div>
                  <div className='post__topRight'>
                      <MoreVert />
                  </div>
              </div>
              <div className='post__center'>
                  <span className='post__text'>{post?.desc}</span>
                 <img className='post__img' src={PF + post.img} alt=''/>
              </div>
              <div className='post__bottom'>
                <div className='post__bottom-left'>
                      <img
                          className='post__likeIcon'
                          src={`${PF}like.png`}
                          alt='iconLike'
                          onClick={onHandleLike}
                        />
                      <img
                          className='post__likeIcon'
                          src={`${PF}heart.png`}
                          alt='iconHeart'
                          onClick={onHandleLike}
                      />
                      <span className='post__likeCounter' onClick={onHandleLike}>{like} people like it</span>  
                  </div>
                  <div className='post__bottom-right'>
                      <span className='post__comment-text'>
                          {post.comment} comments
                      </span>
                </div>
        </div>
        <div className='post__comment'>
          <img src={PF + 'person/noAvatar.png'} alt='logo' className='post__comment-img' />
          <input ref={desc} type='text' placeholder='Enter comment....' className='post__comment-input' />
          <div>
            <Send class="MuiSvgIcon-root" onClick={handleComment} />
          </div>
        </div>
        <div className='post__list-comments'>
          <span className='post__list-comment'>{comments.comment}</span>
          </div>
        </div>
    </div>
  )
}

export default Post