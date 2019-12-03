var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
const mongoConnection = require('./connection').mongoConnection;
//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const dbName = 'mydb';

router.post('/records6',(req, res, next)=> {
    console.log('post call records6');
    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //const con = con.mongoConnection();
    mongoConnection().then((client) => {
        const db = client.db(dbName);
        const collection = db.collection('customers');
        collection.find({name:req.body.name}).toArray(function(err, result) {
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
                collection.insertOne(req.body,function(err, result) {
                    if (err) throw err;
            
                    db.close();
                    res.redirect('/');
                    return;
                });
            };
        
        });
    });
    
});

module.exports = router;