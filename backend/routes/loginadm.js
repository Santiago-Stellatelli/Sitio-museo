var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/loginadm', function(req, res, next) {
  res.render('loginadm', { title: 'prueba sin adm' });
});

module.exports = router;