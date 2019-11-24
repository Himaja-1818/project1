var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Express' });
});

module.exports = router;
