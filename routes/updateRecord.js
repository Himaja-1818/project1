var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/updateRecord', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
         dbo.collection("customers").updateOne({name:"vennela"},{name:"vennela",age:27,gender:"male",city:"mumbai"},{upsert:true})
         if (err) throw err;
         console.log("1 document updated");
         db.close();
         res.redirect('/')
    
    });
});

module.exports = router;