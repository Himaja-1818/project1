var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/records6', function(req, res, next) {
    console.log('post call records6');
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").find({name:req.body.name}).toArray(function(err, result) {
          if (err) throw err;
          console.log('result lenngh',result.length);
          console.log(req.body);
          if(result.length>0)
          {
              console.log("already exist");
              res.send('Record already exists');
              return;
          }
          else{
                dbo.collection("customers").insertOne(req.body,function(err, result) {
                    if (err) throw err;
            
                    db.close();
                    res.redirect('/');
                    return;
                });
            };
        })
    });
});

module.exports = router;