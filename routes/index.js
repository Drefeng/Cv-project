
var express = require('express');
var router = express.Router();

const data = require('../data/data.json');

/* GET HOME PAGE. */
router.get('/', function(req, res, next) {
  res.render('index', { title : 'Hello World!', data : data });
});


/* JSON DATA. */
router.get('/data', function(req, res, next) {
  res.json(dataRouter);
});


module.exports = router;
