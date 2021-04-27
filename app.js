var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')

app.listen(3000, function(){
    console.log('test');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())
app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/searchForm.html');
})

app.post('/email_post', function(req,res){
    res.render('email.ejs',{'email' : req.body.email})
})

app.post('/ajax_send_email', function(req,res){
    console.log(req.body.email);
    var responseData = {'result':'ok', 'email':req.body.email};
    res.json(responseData);
})

app.post('/searching', function(req,res){
    console.log(req.body.search);
    if(req.body.search){
        var responseData = {'result':'ok', 'search':req.body.search};
        res.json(responseData);
    }
})

