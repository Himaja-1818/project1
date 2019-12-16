var express = require('express');
var router = express.Router();
const mongoConnection = require('./connection').mongoConnection;

/* GET home page. */
router.get('/delete', function(req, res, next) {
    console.log('kkkkkkkkkkkkk');
    const dbName = 'mydb';
    mongoConnection().then((client) => {
        const db = client.db(dbName);
        const collection = db.collection('customers');
        collection.deleteOne({name:req.query.name},{ unique:true},function(err, result) {
         if (err) throw err;
         console.log(result);
         console.log("1 document deleted");
  
  res.redirect('/');
});
    });
});

module.exports = router;
