(function() {

    angular
        .module('BarberApp')
        .controller('ReviewsCtrl', reviewsCtrl);

    reviewsCtrl.$inject = ['$scope', 'SearchedBarber', 'YelpSearch'];

    function reviewsCtrl($scope, SearchedBarber, YelpSearch){
        
        var vm = this;
        console.log(window.location);

        vm.content = "Reviews";

        vm.searchedCity = "";
        vm.searchedShop = "";
        
        
        if(SearchedBarber.searchedCity !== null){
            vm.searchedCity = SearchedBarber.searchedCity;
        }
        
        vm.getBarberShop = function(){
            
            var city = vm.searchedCity.City;
            console.log(city);
            
            var shopName = vm.searchedShop.BarberWorkPlace;
            console.log(shopName);
            
            YelpSearch.getBarberShop(city,shopName)
                .then(function(response){
                    vm.getbarbershop = response.data;
                    console.log(vm.getbarbershop);
                })
                .catch(function(e){
                    console.log(e);
                });
            
            
        };
        
        vm.getBarberShop();
        
        
    }


    
})();