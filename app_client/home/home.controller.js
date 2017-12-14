(function() {

    angular
        .module('BarberApp')
        .controller('HomeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', 'YelpSearch'];
    function homeCtrl($scope, YelpSearch) {
         var vm = this;
        console.log(window.location);
        
        vm.content = "Home";
    }
}
);