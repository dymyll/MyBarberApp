var mongoose = require('mongoose');

var BarberData = mongoose.model('BarberData');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

//// BARBER DATA ////////////////////////////////////////////////////////////////
/* GET all BarberData records */
module.exports.barberDataReadAll = function(req, res) {
    console.log("Finding all Barber Data Records", req);

    BarberData
        .find({})
        .exec(function(err, barberData) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(barberData);
            console.log(BarberData.find({}));
            sendJSONresponse(res, 200, barberData);
        });
};

/* GET BarberData by Barber city */
module.exports.barberDataReadOne = function(req, res) {
    console.log('Finding Barber Data Record', req.params);
    if (req.params && req.params.city) {
        BarberData
            .find({
                //Barbers City: req.params.city
                City: req.params.city,
              
            })
            .exec(function(err, barberData) {
                if (!barberData) {
                    sendJSONresponse(res, 404, {
                        "message": "No barbers in this city to be found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(barberData);
                sendJSONresponse(res, 200, barberData);
            });
    }
    else {
        console.log('No city specified');
        sendJSONresponse(res, 404, {
            "message": "No city in request"
        });
    }
};


/* GET BarberData by Barber workplace */
module.exports.barberDataReadShop = function(req, res) {
    console.log('Finding Barber Data Record', req.params);
    if (req.params && req.params.city && req.params.shopName) {
        BarberData
            .find({
                City: req.params.city,
                BarberWorkPlace: req.params.shopName
              
            })
            .exec(function(err, barberData) {
                if (!barberData) {
                    sendJSONresponse(res, 404, {
                        "message": "No barbers in this city to be found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(barberData);
                sendJSONresponse(res, 200, barberData);
            });
    }
    else {
        console.log('No city specified');
        sendJSONresponse(res, 404, {
            "message": "No city in request"
        });
    }
};





////////////////////////////////////////////////////////////////////////////////////
