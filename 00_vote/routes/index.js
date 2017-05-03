var express = require('express');
var router = express.Router();

var ouioui = 0;
var becassine = 0;

/* GET home page. */
router.get('/', function(req, res, next) {

  if (req.query.vote === 'becassine') {
    becassine++;
  }
  if (req.query.vote === 'ouioui') {
    ouioui++;
  }

  res.render('index', { ouioui: ouioui, becassine: becassine });
  
});

module.exports = router;
