const io = require('socket.io')(8900, {
    cors: {
        origin: 'http://localhost:3000',
    },
})

io.on('connection', (socket) => {
    console.log('A user connected')
    io.emit("Welcome", 'Hello this socket server')
})