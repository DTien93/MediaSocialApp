import React, { useState, useEffect, useContext } from 'react'

import '../Feed/feed.scss'

import axios from 'axios'

import { AuthContext } from '../../context/AuthContext'

// Components
import Post from '../Post/Post'
import Share from '../Share/Share'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

  const {user} = useContext()
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('posts/profile/'+ username)
        : await axios.get('posts/timeline/' + user._id)
      setPosts(res.data)
    }
    fetchPosts()
 }, [])
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <Share />
        {
          posts.map((post) => (
            <Post key={post._id} post={post}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feed