var express             = require('express');
var router              = express.Router();

var ctrlBarberData = require('../controllers/barberData');
var ctrlBarbers = require('../controllers/barbers');
var ctrlYelp = require('../controllers/yelpapi');

router.get('/barber/:city', ctrlYelp.SEARCH);



module.exports = router;
