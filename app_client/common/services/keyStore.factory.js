(function() {

    angular
        .module('BarberApp')
        .factory('KeyStore', keyStore);

    keyStore.$inject = ['$http'];
    function keyStore($http) {
        var getYelpUrl = function(city){
            return $http.get('/api/yelpurl/' + city );
        }

        return {
            getKeys: getYelpUrl
        };
    }

})();
