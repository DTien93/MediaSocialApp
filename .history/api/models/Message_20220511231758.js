const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
   {
        conversationId: {
            
        }
   },
   { timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema)