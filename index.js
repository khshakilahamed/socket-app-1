const express = require('express');
const app = express();

const http = require('http');
const expressServer = http.createServer(app);

// socket module
const { Server } = require('socket.io');
const io = new Server(expressServer);


io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log("User Disconnect");
    })
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

expressServer.listen(3000, () => {
    console.log("Server run @ 3000");
})