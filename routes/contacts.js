var express = require('express');
var router = express.Router();

/* GET contact Us Page. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Contact Us' });
});

module.exports = router;
