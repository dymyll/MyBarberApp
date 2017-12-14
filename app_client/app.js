(function () {
  
  angular.module('BarberApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("Barber Locator APP");
    
    $routeProvider
   
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      })
  
  
        .when('/barbers/', {
        templateUrl: '/barber/barber.view.html',
        controller: 'barberCtrl',
        controllerAs: 'vm'
      })
      
        .when('/reviews/', {
        templateUrl: '/reviews/reviews.view.html',
        controller: 'reviewsCtrl',
        controllerAs: 'vm'
      })
      
      .otherwise({redirectTo: '/barbers/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('BarberApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();