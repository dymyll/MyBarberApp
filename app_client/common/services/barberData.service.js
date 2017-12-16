(function() {

    angular
        .module('BarberApp')
        .service('BarberData', barberData);

    barberData.$inject = ['$http'];

    function barberData($http) {
        /*
        var getBarberData = function() {
            return $http.get('/api/barberdata');
        }
        */
        var getBarberDataForCity = function(city) {
            return $http.get('/api/barberdata/' + city);
        }
        
        /*
        var getBarberDataForShop = function(BarberWorkPlace) {
            return $http.get('/api/barbershop/' + BarberWorkPlace);
        }
        */
        return {
           // getBarberData: getBarberData,
            getBarberDataForCity : getBarberDataForCity,
           // getBarberDataForShop : getBarberDataForShop
        };
    }
})();
