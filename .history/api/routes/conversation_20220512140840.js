const router = require('express').Router()
const Conversation = require('../models/Conversation')

// New conversation
router.post('/', (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        
    } catch (err) {
        res.status(500).json(err)
    }
})  
// Get conversation of a user


module.exports = router