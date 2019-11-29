var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/updateRecord', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
         dbo.collection("customers").updateOne({name:req.body.name},{ $set:
            {
              age:27}},{upsert:true},function(err, result) {
         if (err) throw err;
         console.log('result1',result.result);

        
         db.close();
         res.redirect('/');
              })
    });
});

module.exports = router;