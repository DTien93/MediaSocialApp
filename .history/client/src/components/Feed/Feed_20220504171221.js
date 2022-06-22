import React, { useState, useEffect } from 'react'

import '../Feed/feed.scss'

import axios from 'axios'

// Components
import Post from '../Post/Post'
import Share from '../Share/Share'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = username
//         ? await axios.get('posts/profile/' + username)
//         : await axios.get('posts/timeline/6267bc1170db883000d98021')
//       console.log(res.data)
//     }
//     fetchPosts()
//  }, [username])

useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get('/posts/profile/admin')
    console.log(res.data)
  }
  fetchPosts()
},[])
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