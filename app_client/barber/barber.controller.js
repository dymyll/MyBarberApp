(function() {

    angular
        .module('BarberApp')
        .controller('BarberCtrl', barberCtrl);

    barberCtrl.$inject = ['$scope', 'YelpSearch'];

    function barberCtrl($scope, YelpSearch) {

        var vm = this;
        console.log(window.location);

        vm.content = "Barber";


        //check selected Departure
        if (vm.city !== null) {
            YelpSearch.city = vm.city;
            console.log("This is your lat " + YelpSearch.city);
        }
        
        //check selected Arrival
        if (vm.shopName!== null) {
            YelpSearch.shopName = vm.shopName
            console.log("This is your barber shop name " + YelpSearch.shopName);
        }



        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getLocalShop = function() {

            /*global navigator*/
            
		  var city = vm.city;
		  var shopName = vm.shopName;
		

            YelpSearch.getBarberShop(city, shopName)
                .then(function(response) {
                    vm.getbarbershop = response.data;
                    console.log(vm.getbarbershop);
                })
                .catch(function(e) {
                    console.log(e);
                });
       
    };

        //call services
        vm.getLocalShop();
    
    }

})();
