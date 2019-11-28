let fs = require('fs');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let routs = require( __dirname + '/app_module/routes/routs.js');
let io = require('socket.io').listen(server);

app.set('view engine', 'ejs');
app.use('/parts',express.static('parts'));

app.use('/', routs);

let users = [];
let connections = [];

io.sockets.on('connection', (socket) => {
console.log('++++');
    connections.push(socket);
    

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('----');
    });
    socket.on('send message', (data) => {
        io.sockets.emit('post message',{msg:data.msg, name:data.name,});
    });
});


server.listen('3000');  

