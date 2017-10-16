var express = require('express');
var router = express.Router();

/* GET JEU. */
router.get('/jeu', function(req, res, next) {
    console.log('jappel jeu');
    res.render('indexe', { title: 'Express' });
});


module.exports = router;
