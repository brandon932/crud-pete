var express = require('express');
var router = express.Router();
var Talks = require("../models/petes.js");

router.get('/talks', function(req, res, next) {
    Talks.find(function(err, talk){
        if (err) {
            res.json({"message": err});
        }else{
            res.json(talk);
        }
    });
});
router.post('/talks', function(req,res,next){
    newTalk = new Talk(req.body);
    newTalk.save(function(err, talk){
        
    });

});


module.exports = router;
