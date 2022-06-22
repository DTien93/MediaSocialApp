const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

// Routes
const authRoute = require('./routes/auth')

dotenv.config()

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connect to MongoDB')
    }
)
app.use('/api/auth', authRoute)

app.listen(5000, () => (
    console.log('Backend server is running')
))

