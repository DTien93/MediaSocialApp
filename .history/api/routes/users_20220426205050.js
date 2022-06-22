const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// Update user
routes.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.getSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            
        } catch (error) {
            res.status(400).json(error)
        }
    }
} )
// Delete user


// Get user

// follow user

// un follow user
module.exports = router 