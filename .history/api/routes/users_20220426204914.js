const router = require('express').Router()
const User = require('../models/User')


// Update user
routes.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await 
        }
    }
} )
// Delete user


// Get user

// follow user

// un follow user
module.exports = router 