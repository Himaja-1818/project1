var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/submitDetails', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
         myobj = { name: "vennela", age:21 , gender:"female" ,city: "chennai"  };
         dbo.collection("customers").insertOne(myobj, function(err, result) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();
         res.redirect('/')
        });
    });
});

module.exports = router;