let fs = require('fs');
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let routs = require( __dirname + '/app_module/routes/routs.js');

app.set('view engine', 'ejs');
app.use('/parts',express.static('parts'));


app.use('/', routs);

app.listen('3000');
