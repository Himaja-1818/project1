var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
  
router.get('/records2', function(req, res, next) {
 console.log( req.query)
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
   const dbo = db.db(req.query.db);
    
     dbo.collection(req.query.collections).find({}).toArray(function(err, result) {
    if (err) throw err;
      console.log(result);
      db.close();
      res.render('records2view',{
        result1:result,
       
        length:result.length
        });
        
      
      })
    });

  });
module.exports = router;
