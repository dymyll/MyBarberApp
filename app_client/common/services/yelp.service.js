(function() {

    angular
        .module('BarberApp')
        .service('YelpSearch', yelpsearch);

   yelpsearch.$inject = ['$http'];

    function yelpsearch($http) {
        var getBarberShop = function(city,shopName) {
            //darkskyapi/:lat/:lon
            city = "Amarillo";
            shopName = "Sloss Barber Shop"
           // lon = "-101.845278";
            return $http.get('/api/yelpapi' + '/' + shopName + city );
        };
        
        return {
            getBarberShop: getBarberShop,
        };
    }
})();
