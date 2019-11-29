var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.post('/deleteRecord', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         dbo = db.db("mydb");
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