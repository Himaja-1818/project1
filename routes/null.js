var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/null', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
         myobj = { name: "vennela", age:23 , gender:"male" ,city: "chennai"  };
         dbo.collection("customers").updateOne(myobj, function(err, result) {
         if (err) throw err;
         console.log("1 document updated");
         db.close();
         res.redirect('/')
        });
    });
});

module.exports = router;