const express = require('express');

//app set up

const app = express();

const server = app.listen(4000, () => console.log('listening to requests on port 4000'));
