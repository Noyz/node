var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('jappel standard');
    res.render('index', { title: 'Express' });
});


/* GET JEU. */
router.get('/jeu', function(req, res, next) {
    console.log('jappel jeu');
    res.render('indexe', { title: 'Jeu' });
});


module.exports = router;
