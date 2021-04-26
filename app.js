var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(3000, function(){
    console.log('test');
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/email_post', function(req,res){
    res.render('email.ejs',{'email' : 'youngkim90@naver.com'})
})