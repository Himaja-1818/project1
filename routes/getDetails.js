var express = require('express');
var router = express.Router();


router.get('/getDetails', function(req, res, next) {
  res.render('getDetails');
});

module.exports = router;
