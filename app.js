var express = require('express');
var socketIO = require('socket.io');
var path = require('path');
var adminrouter = require('./routes/adminRouter');

var app = express();
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminrouter);

var server = app.listen(3000);
var io = socketIO(server);
io.on('connection', (socket) => {
    socket.emit('givemessage', {
        geeting: 'hi'
    })
})