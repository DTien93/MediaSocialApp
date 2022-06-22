import React, { useState, useEffect } from 'react'

import '../Feed/feed.scss'

import axios from 'axios'

// Components
import Post from '../Post/Post'
import Share from '../Share/Share'

import { Posts } from '../../dummyData'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/6267b9e3b9624699acde08a4')
      console.log(res.data)
   }
 }, [])
  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        <Share />
        {
          Posts.map((post) => (
            <Post key={post.id} post={post}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feed