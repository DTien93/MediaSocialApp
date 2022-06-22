const router = require('express').Router()
const Comment = require('../models/Comment')

// Create a comment
router.post('/', async (req, res) => {
    // Get all body
    const newComment = new Comment(req.body)
    try {
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router