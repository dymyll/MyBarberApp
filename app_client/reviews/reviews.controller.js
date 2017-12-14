(function() {

    angular
        .module('BarberApp')
        .controller('ReviewsCtrl', reviewsCtrl);

    reviewsCtrl.$inject = ['$scope', 'YelpSearch'];
    function reviewsCtrl($scope, YelpSearch) {
         var vm = this;
        console.log(window.location);
        
        vm.content = "BarberShop Reviews";
    }
}
);