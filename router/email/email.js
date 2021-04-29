var express = require('express');
var router =express.Router();
var mysql = require('mysql');

var db = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : '111111',
    database : 'opentutorials'
})

db.connect();

router.post('/form', function(req,res){
    res.render('email.ejs',{'email' : req.body.email})
})

router.post('/ajax', function(req,res){
    var email = req.body.email;
    console.log(email);
    var responseData = {};

    var query = db.query('select name from user where email=?', [email], function(err, result){
        if(err) throw err;
        if(result[0]){
            responseData.result = "ok";
            responseData.name = result[0].name;
        } else {
            responseData.result = "";
            responseData.name = "";
        }
        res.json(responseData);
    })

})

module.exports = router;