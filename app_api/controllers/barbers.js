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
            sendJSONresponse(res, 200, barberData);
        });
}

/* GET BarberData by Barber Work Place */
module.exports.barberDataReadOne = function(req, res) {
    console.log('Finding Barber Data Record', req.params);
    if (req.params && req.params.shopName) {
        BarberData
            .find({
                BarberWorkPlace: req.params.shopName
            })
            .exec(function(err, barberData) {
                if (!barberData) {
                    sendJSONresponse(res, 404, {
                        "message": "Barber shop name not found"
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
        console.log('No shop name specified');
        sendJSONresponse(res, 404, {
            "message": "No shop name in request"
        });
    }
};

////////////////////////////////////////////////////////////////////////////////////
