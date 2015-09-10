var express = require('express');
var router = express.Router();

/* GET backbone home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Backbone Characters' });
});

/* GET angular home page. */
router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Angular Characters' });
});

module.exports = router;
