var express = require('express');
var bodyparser = require('body-parser');
var Store = require('../models/store').Store;
var Product = require('../models/product').Product;
var router = express.Router();
router.use(bodyparser.json());

router.post('/items', function(req, res) {
    console.log('got to API', req.body.name);
    Product.find({name:req.body.name},function(err, items){
        if(err){res.status(400).json(err);}
        console.log(items);
        res.json(items);

    });
});    
//Text Search   
router.post('/wines', function(req,res){
    Product.find({$text: {$search:req.body.name}}, {score: {$meta: 'textScore'}})
    .sort({score: {$meta: 'textScore'}}) 
    .limit(10)
    .exec(function(err,items){
        if(err){res.status(400).json(err);}
        console.log(items);
        res.json(items);       
    });
});

module.exports = router;

//FUTURE

/*router.post('/items', function(req, res) {
    Item.save(req.body.name, req.body.producer, req.body.vintage, function(item) {
        console.log('router post endpoint: '+req.body.name);
        res.status(201).json(item);
    }, function(err) {        
        res.status(400).json(err);    
    });
});

router.delete('/items/:id', function(req, res) {
//    console.log("router delete endpoint "+req.params.name);
    Item.listone(req.params.id, function(item) {
        res.status(204).json(item);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.put('/items/:id', function(req, res) {
    console.log("Put request called");
    Item.change(req.params.id,req.body.name, function(item) {
        res.status(204).json(item);
    }, function(err) {
        res.status(400).json(err);
    });
});
//testing file uploads

router.post('/file-upload',upload.single('image'), function(req, res, next) {
    console.log(req.body.ID);
    res.sendStatus(201);
});*/