const router = require('express').Router()
const Conversation = require('../models/Conversation')

// New conversation
router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (err) {
        res.status(500).json(err)
    }
})  
// Get conversation of a user
router.get('/:userId', async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId]}
        })
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router