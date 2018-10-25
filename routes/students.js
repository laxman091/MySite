var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('helo');
  //res.render('students');
  res.render("students", {student: 'Laxman Rana'});
});

module.exports = router;
