var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/deleteRecord', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
         dbo.collection("customers").deleteOne({name:req.body.name},{ unique:true})
         if (err) throw err;
         console.log("1 document deleted");
         db.close();
         res.redirect('/')
    
    });
});

module.exports = router;