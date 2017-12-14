(function () {
  
  angular.module('BarberApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("BEING AIRPLANE SERVICES APP - MEAN STACK DRIVEN");
    
    $routeProvider
   /*
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
  */
  /*
      .when('/weather/', {
        templateUrl: '/weather/weather.view.html',
        controller: 'weatherCtrl',
        controllerAs: 'vm'
      })      
    */  
        .when('/barbers/', {
        templateUrl: '/barber/barber.view.html',
        controller: 'barberCtrl',
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