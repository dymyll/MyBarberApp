var mongoose = require('mongoose');
var BarberData = mongoose.model('BarberData');

//utility method for the module
var sendJSONresponse = function(res, status, content)
{
    res.status(status);
    res.json(content);
}

/* GET all AirportData records */
module.exports.barberDataReadAll = function(req, res)
{
  console.log("Finding all Barber Data Records", req);
  
  //this will read all of  the data and send it back to the requested user
  BarberData
    .find({})
    .exec(function(err, barberData){
      if(err){
        console.log(err);
        sendJSONresponse(res, 404, err);
      }
      console.log(barberData);
      sendJSONresponse(res, 200, barberData);
    });
}