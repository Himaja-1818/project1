var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
  
router.get('/records1', function(req, res, next) {
  
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    //Find all documents in the customers collection:
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.render('records1view',{
        result1:result,
        length:result.length
        });
        
      
      })
    });
  });

module.exports = router;
