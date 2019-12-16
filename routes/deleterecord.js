var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

const mongoConnection = require('./connection').mongoConnection;
//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const dbName = 'mydb';
router.post('/deleteRecord', function(req, res, next) {

   name = req.query.name;
    mongoConnection().then((client) => {
        const db = client.db(dbName);
        const collection = db.collection('customers');
          dbo.collection("customers").deleteOne({name:req.body.name},{ unique:true},function(err, result) {
         if (err) throw err;
         console.log("1 document deleted");
         console.log(result.result);
         if(result.result.n===0){
        
           res.render('errormsg',{
             errorIn:'delete',
             name:req.body.name
            
         });
         }else{
             res.redirect('/');
         }
    });
});
});

module.exports = router;