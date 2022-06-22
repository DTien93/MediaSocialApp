const router = require('express').Router()
const Conversation = require('../models/Conversation')

// New conversation
router.post('/', (req, res) => {
    const newConversation = new Conversation({
        
    })
})
// Get conversation of a user


module.exports = router