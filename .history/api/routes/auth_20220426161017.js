const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

// REGISTER USER
router.get('/register', async (req, res) => {
  const user = await new User({
    username: 'Henry',
    email: 'henry@gmail.com',
    password: '1234555'
  })
  await user.save()
  res.send('Send data ok')
})


module.exports = router