var express = require('express');
var router = express.Router();
var Talk = require("../models/petes.js");

router.get('/talks', function(req, res, next) {
    Talk.find(function(err, talk){
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
        if (err) {
            res.json({'message': err});
        }else{
            res.json(talk);
        }
    });
});
router.get('/talk/:id', function(req,res,next){
    Talk.findById(req.params.id, function(err, talk){
        if (err) {
            res.json({'message': err});
        }else{
            res.json(talk);
        }
    });
});

router.put('/talk/:id', function(req,res,next){
    var options = {"new":true};
    Talk.findByIdAndUpdate(req.params.id, req.body, options, function(err, talk){
        if (err) {
            res.json({'message': err});
        }else{
            res.json(talk);
        }
    });
});
router.delete('/talk/:id', function(req,res,next){
    Talk.findByIdAndRemove(req.params.id, function(err, talk){
        if (err) {
            res.json({'message': err});
        }else{
            res.json({'message': "success!"});
        }
    });
});


module.exports = router;
