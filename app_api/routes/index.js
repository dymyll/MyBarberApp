var express             = require('express');
var router              = express.Router();

var ctrlBarberData = require('../controllers/barberData');
var ctrlBarbers = require('../controllers/barbers');
var ctrlYelp = require('../controllers/yelpapi');

router.get('/barber/:city', ctrlYelp.SEARCH);

router.get('/reviews/:barbershop/:city', ctrlYelp.Reviews);

router.get('/shop/:barbershop/:city', ctrlYelp.ShopName);

/////////////////- MAIN ROUTES TO ACCESS -///////////////////////////////////////////

//reads all the barbers in the system 
router.get('/barberdata/', ctrlBarbers.barberDataReadAll);

//This allows the system to find specific barbers based on their city
router.get('/barberdata/:city', ctrlBarbers.barberDataReadOne);

//specified based on city and shop
router.get('/barbershop/:city/:shopName', ctrlBarbers.barberDataReadShop);


module.exports = router;
