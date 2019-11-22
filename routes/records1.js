var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// var mongoose = require('mongoose');
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [{ name: "himaja",age:21,gender:"female",city:"krishnagiri"},{name: "ayisha",age:22,gender:"female",city:"chennai"},{name: "mani",age:23,gender:"male",city:"hosur"},{name: "gauthami",age:24,gender:"female",city:"bangalore"},{name: "gopal",age:21,gender:"male",city:"bhopal"}];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

module.exports=router;