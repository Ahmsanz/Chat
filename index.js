const express = require('express');

var socket = require('socket.io');


//app set up

const app = express();

const server = app.listen(4000, () => console.log('listening to requests on port 4000'));

//static files

app.use(express.static('public'));

//socket set up; fires the method socket and passes the set up server as a parameter.

const io = socket(server);

// this io.on method will handle what happens with the chat message on the server side. It listens to the particular socket where the message is being transferred, and re-emits that message to the rest of sockets connected to the server.

io.on('connection', (socket) => {
  console.log('socket connection is made');
  console.log(socket.id);

  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });

});
