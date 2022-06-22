const router = require('express').Router()
const Comment = require('../models/Comment')

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

module.exports = router