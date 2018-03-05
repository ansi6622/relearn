var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First NodeJS Website',tits: 'Enviornment Setup', titties: 'App Creation' });
});

module.exports = router;
