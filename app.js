const socket = require('socket.io')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('view'))

const server = app.listen(3000)

const io = socket(server)
io.on('connection', (socket) => {
    
    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })
})


