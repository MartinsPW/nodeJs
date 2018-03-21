var express = require('express');

var router = express.Router();
var funcoes = require('../Funcoes/sql');

/* GET home page. */
router.get('/', function(req, res, next) {
    funcoes.getAllRaridade((err, rows) => {
      res.render('index', { title: 'Express', rows: rows });
    });

});


module.exports = router;
