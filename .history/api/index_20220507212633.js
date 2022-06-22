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

// Path image

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File upload successfully')
  } catch (err) {
    console.log(err)
  }
})

app.listen(8800, () => (
    console.log('Backend server is running')
))

