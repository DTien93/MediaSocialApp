const io = require('socket.io')(8900, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

let users = []

const addUser = (userId, socketId) => {
    // Check userID === userCurrentID
    !users.some((user) => user.userId === userId) && 
        users.push({ userId, socketId })
}

const removeUser = ( socketId ) => {
    users = users.filter(user=>user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

io.on('connection', (socket) => {
    // When connected
    console.log('A user connected')
    // Take userId and socketId from user
    socket.on('addUser', (userId) => {
        addUser(userId, socket.id)
        io.emit('getUsers', users)
      })
    
    // Send and get message
    socket.on('sendMessage', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId)
        io.to(user.socketId).emit('getMessage', {
          senderId,
          text,
        })
      })
    
    // When disconnected
    socket.on('disconnect', () => {
        console.log('a user disconnect')
        removeUser(socket.id)
    })
})