var Yelp = require('node-yelp-fusion');
var yelp=new Yelp({ id: "1baqsxe7PeuOoDMIUCuDuA" , secret: "FmissAoNPMqMTwNrN7cu9BU006kSrm2rUx70ZAWumNs3viurkFSVjCBMQecDTslL" });

 
module.exports.SEARCH = function(req, res){
    var city = req.params.city;
    yelp.search("term=Barbershops" + "&location=" + city)
    .then(function(result){
           res.json(result);
        });
};


module.exports.Reviews = function(req, res){
    var barbershop = req.params.barbershop;
    var city = req.params.city;
    yelp.reviews(barbershop + "-" +city)
    .then(function(result){
           res.json(result);
           
      
        });
};

module.exports.ShopName = function(req, res){
    var barbershop = req.params.barbershop;
    var city = req.params.city;
    //yelp.business(barbershop + "-amarillo")
    yelp.business(barbershop + "-" +city)
    .then(function(result){
           res.json(result);
           
      
        });
};