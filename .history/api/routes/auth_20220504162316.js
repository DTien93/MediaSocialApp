const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// REGISTER USER
router.post('/register', async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })
  
    // Save user and return respond
    const user = await newUser.save()
    res.status(200).json(user)  
  } catch (err) {
    res.status(500).json(err) 
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    !user && res.status(404).json('User not found')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json('wrong password')
    
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get user's all posts
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findById({ username: req.params.username })
    const posts = await Post.find({ userId: user._id })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(err)
  }
})

module.exports = router