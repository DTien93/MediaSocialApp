const io = require('socket.io')(8900, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

let users = []

const addUser = (userId, socketId) => {
    // Check userID === userCurrentID
    !users.some((user) => user.userId === userId) && 
        users.push({ userId, socketId})
}

io.on('connection', (socket) => {
    console.log('A user connected')
    // Take userId and socketId from user
    socket.on('addUser', userId=>{
        addUser(userId, socket.id)
        io.emit('getUsers', users)
    })
})