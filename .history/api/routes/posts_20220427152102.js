const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// Create a post
router.post('/', async (req, res) => {
    // Get all body
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Update a post
router.put('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (post.userId === req.body.userId) {
        await post.updateOne({ $set: req.body })
        res.status(200).json('the post has been updated')
      } else {
        res.status(403).json('you can update only your post')
      }
    } catch (err) {
      res.status(500).json(err)
    }
})
  
// Delete a post
router.delete('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      if (post.userId === req.body.userId) {
        await post.deleteOne()
        res.status(200).json('the post has been deleted')
      } else {
        res.status(403).json('you can delete only your post')
      }
    } catch (err) {
      res.status(500).json(err)
    }
})
  
// Get a post

// Get all posts

// Like a post



// Get timeline a post

module.exports = router