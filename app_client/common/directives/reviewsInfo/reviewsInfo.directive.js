(function () {

  angular
    .module('airplaneApp')
    .directive('reviewsInfo', [reviewsInfo]);

  function reviewsInfo () {
    return {
      restrict: 'EA',
      scope: {
        reviews : '=info',
      },      
      templateUrl: '/common/directives/reviewsInfo/reviewsInfo.template.html'
    };
  }
})();