const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
   {
        conversationId: {
            type: String,
        },
        sender: {
           
       }
   },
   { timestamps: true }
)

module.exports = mongoose.model('Message', MessageSchema)