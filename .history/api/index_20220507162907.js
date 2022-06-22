const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const router = express.Router()
const path = require('path')

const multer = require('multer')

// Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')

dotenv.config()

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

mongoose
  .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true})
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err))
  
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)

const upload = multer()
app.post('api/upload', upload.single('file'), (req, res) => {
  
})

app.listen(8800, () => (
    console.log('Backend server is running')
))

