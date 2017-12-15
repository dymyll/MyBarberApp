(function() {

    angular
        .module('BarberApp')
        .service('YelpSearch', yelpsearch);

   yelpsearch.$inject = ['$http'];

    function yelpsearch($http) {
        var getBarberShop = function(barbershop, city) {
            //darkskyapi/:lat/:lon
           barbershop="";
           city="";
           // lon = "-101.845278";
            return $http.get('/api/yelpapi' + '/' + barbershop + city );
        };
        
        return {
            getBarberDataForCity: getBarberShop
        };
    }
})();
