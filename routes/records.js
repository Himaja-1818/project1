var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
router.get('/records', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [{ name: "himaja",age:21,gender:"female",city:"krishnagiri"},{name: "ayisha",age:22,gender:"female",city:"chennai"},{name: "mani",age:23,gender:"male",city:"hosur"},{name: "gauthami",age:24,gender:"female",city:"bangalore"},{name: "gopal",age:21,gender:"male",city:"bhopal"}];
    dbo.collection("customers").insertMany(myobj, function(err, result) {
      if (err) throw err;
      console.log("document inserted");
      db.close();
      res.render('recordsview');
    });
  });
});

module.exports = router;
