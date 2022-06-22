const router = require('express').Router()
const Message = require('../models/Message')

// Add message
router.post('/', async (req, res) => {
    const newMessage = new Message({
        
    })
})

// Get message

module.exports = router