var express = require('express');
var router =express.Router();
var path = require('path');
var main = require('./main/main');
var email = require('./email/email');
var join = require('./join/join');

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/main.html'));
});

router.post('/searching', function(req,res){
    console.log(req.body.search);
    if(req.body.search){
        var responseData = {'result':'ok', 'search':req.body.search};
        res.json(responseData);
    }
})

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);

module.exports = router;