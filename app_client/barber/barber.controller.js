(function() {

    angular
        .module('BarberApp')
        .controller('BarberCtrl', barberCtrl);

    barberCtrl.$inject = ['$scope', 'BarberData', 'SearchedBarber' ,'YelpSearch'];
    
    var Go = barberCtrl();
    
    function barberCtrl($scope, BarberData, SearchedBarber, YelpSearch) {
        
        console.log(window.location);
        var vm = this;
        //console.log(window.location);

        vm.content = "Barber";
        
        vm.searchedCity = "Amarillo";


        //check city
        if (SearchedBarber.searchedCity !== null) {
            vm.searchedCity = SearchedBarber.searchedCity;
            //SearchedBarber.searchedCity = vm.searchedCity;
            console.log("This is your city " + vm.searchedCity);
        }
        
        /*
        //check shopName 
        if (vm.shopName!== null) {
            YelpSearch.shopName = vm.shopName;
            console.log("This is your barber shop name " + YelpSearch.shopName);
        }

        */

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getLocalShop = function() {
            //city should be what the system is looking for to choose what barbers to display
            
            var city = vm.searchedCity;
            console.log(city);
            
            
            BarberData.getBarberData()
            .then(function(response){
                //vm.localShop should be used in barber.view.html to get the response
                vm.localShop = response.data;
                console.log(response);
            })
          .catch(function(e) {
          console.log(e);
        });
            /*global navigator*/
            
            
            /*
            YelpSearch.getBarberShop(city, shopName)
                .then(function(response) {
                    vm.getbarbershop = response.data;
                    console.log(vm.getbarbershop);
                })
                .catch(function(e) {
                    console.log(e);
                });
       */
    };
    
    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    //save the search 
     $scope.$watch(
      function(){
        return vm.searchedCity;    
      }, 
      function (newSearch, oldSearch) {
        console.log(oldSearch);
        console.log(newSearch);
        if (newSearch.city !== oldSearch.city){
          SearchedBarber.searchedCity = newSearch;
        } 
      }, 
      true
    );
    
    

        //call services
        vm.getLocalShop();
        
    }

   
})();
