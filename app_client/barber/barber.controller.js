(function() {

    angular
        .module('BarberApp')
        .controller('BarberCtrl', barberCtrl);

    barberCtrl.$inject = ['$scope', 'YelpSearch'];

    function barberCtrl($scope, YelpSearch) {

        var vm = this;
        console.log(window.location);

        vm.content = "Barber";

        //vm.lat = "35.199167";
       // vm.lat =  "80.373176";
        //vm.lon = "-101.845278";
     //   vm.lon = "95.519536";

       // vm.selectedWeight = "";

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

        //check selected weight
    /*    
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
    */    

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getLocalShop = function() {
           /* 
            var lat = vm.lat;
            console.log(lat);
            var lon = vm.lon;
            console.log(lon);   
            */
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

        //refactored for Angular 1.6 - removed success/error, used Promises...   
    /*    
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
    */
        //call services
        vm.getLocalShop();
       // vm.getArrivalWeather();

    }

})();
