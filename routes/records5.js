// var express = require('express');
// var router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";
// /* GET home page. */
  
// router.get('/records5', function(req, res, next) {
//     var perPage = 10
//     var page = req.params.page || 1
//     MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
//         if (err) throw err;
//        const dbo = db.db("mydb");
//         dbo.collection("customers").find({}).skip((perPage * page) - perPage)
//             .limit(perPage)
//             .exec(function(err, customers) {
//                  customers.count().exec(function(err, count) {
//                     if (err) return next(err)
//                     console.log(customers)
//                      res.render('records5view', {
//                          customers:customers,
//                          current: page,
//                          pages: Math.ceil(count / perPage)
//                 })
//             })
//         })
//     })
// })
//   module.exports = router;
var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
  
router.get('/records5', function(req, res, next) {
 const limitValue = 10;
 const skipValue = parseInt(req.query.skipValue)
  MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
    if (err) throw err;
   const dbo = db.db("mydb");
    
   dbo.collection("customers").find().toArray(function(err, result1) { 
       if (err) throw err;
       dbo.collection("customers").find().limit(10).skip(skipValue*limitValue).toArray(function(err, result2) { 
        if (err) throw err;
      
      db.close();
      console.log(result2);
      
      res.render('records5view',{
        result1:result2,
       page:Math.ceil(result1.length/limitValue),
        length:result2.length
        });
        
      
      })
    });

  });
});
module.exports = router;
