const express =require('express');
const  router = express.Router();
let handlers = require('../handers/handlers.js');
let bodyParser =require('body-parser');


let  urlencodedParser = bodyParser.urlencoded({extended : true});


router.get('/' , (req,res)=>{
    res.render('main', {Title:'Main page'});
});


module.exports = router;