const express = require('express');

let socket = require('socket.io');


//app set up

const app = express();

const server = app.listen(4000, () => console.log('listening to requests on port 4000'));

//static files

app.use(express.static('public'));

//socket set up; fires the method socket and passes the set up server as a parameter.

const io = socket(server);

io.on('connection', (socket) => {
  console.log('socket connection is made');
})
