var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
/* GET home page. */
router.post('/records', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [{ name: "himaja",age:21,gender:"female",city:"krishnagiri"},{name: "ayisha",age:22,gender:"female",city:"chennai"},{name: "mani",age:23,gender:"male",city:"hosur"},{name: "gauthami",age:24,gender:"female",city:"bangalore"},{name: "gopal",age:21,gender:"male",city:"bhopal"}];
    //var myobj = [{ name: "lavanya",age:21,gender:"female",city:"krishnagiri"},{name: "afsha",age:22,gender:"female",city:"chennai"},{name: "sangeetha",age:23,gender:"female",city:"hosur"},{name: "keily",age:24,gender:"male",city:"bangalore"},{name: "hasan",age:21,gender:"male",city:"bhopal"},{ name: "kiran",age:21,gender:"female",city:"krishnagiri"},{name: "naveena",age:22,gender:"female",city:"chennai"},{name: "shri",age:23,gender:"female",city:"hosur"},{name: "vishwa",age:24,gender:"male",city:"bangalore"},{name: "jolin",age:21,gender:"male",city:"bhopal"}];
    
    dbo.collection("customers").insertMany( myobj,function(err, result) {
      if (err) throw err;
      console.log("document inserted");
      db.close();
      res.redirect('/');
    });
  });
});

module.exports = router;
