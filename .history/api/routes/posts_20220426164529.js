const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// Create a post
router.post('/', async (req, res) => {
    // Get all body
    const newPost = new Post(req.body)
    try {
        
    } catch (error) {
        
    }
})