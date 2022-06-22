const router = require('express').Router()
const Message = require('../models/Message')

// Add message
router.post('/', async (req, res) => {
    const newMessage = new Message(req.body)

    try {
        
    } catch (err) {
        
    }
})

// Get message

module.exports = router