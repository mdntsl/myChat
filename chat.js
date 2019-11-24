let express = require(express);
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', (req,res) =>{
    res.render(__dirname +'/index.html');
});