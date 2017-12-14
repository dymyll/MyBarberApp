(function () {

  angular
    .module('BarberApp')
    .directive('barberInfo', [barberInfo]);

  function barberInfo () {
    return {
      restrict: 'EA',
      scope: {
       // weather : '=info',
        barber : '=info',
      },      
      templateUrl: '/common/directives/barberInfo/barberInfo.template.html'
    };
  }
})();