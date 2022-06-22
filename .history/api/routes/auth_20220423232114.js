const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// REGISTER USER
router.get('/register', async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        // Create new user
        const userUser = new User({
            
        })
    } catch (err) {

    }
})