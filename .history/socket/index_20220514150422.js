const io = require('socket.io')(8900, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

let users = []

const addUser = (userId, socketId) => {
    // Check user === userCurrent
    !users.some
}

io.on('connection', (socket) => {
    console.log('A user connected')
    // Take userId and socketId from user
    socket.on('addUser', userId=>{

    })
})