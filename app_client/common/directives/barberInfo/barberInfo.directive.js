(function () {

  angular
    .module('BarberApp')
    .directive('barberInfo', barberInfo);

  function barberInfo () {
    return {
      restrict: 'EA',
      scope: {
       // weather : '=info',
        barbers : '=info',
      },      
      templateUrl: '/common/directives/barberInfo/barberInfo.template.html'
    };
  }
})();