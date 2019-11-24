var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
  
router.get('/records4', function(req, res, next) {
 
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
   const dbo = db.db("mydb");
    
   dbo.collection("customers").find().limit(10).toArray(function(err, result) { 
       if (err) throw err;
      console.log(result);
      db.close();
      res.render('records4view',{
        result1:result,
       
        length:result.length
        });
        
      
      })
    });

  });
module.exports = router;
