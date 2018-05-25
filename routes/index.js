var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SDDS R$' });
});

router.get('/dicas', function(req, res, next) {
  res.render('dicas', { title: 'Dicas' });
});

module.exports = router;
