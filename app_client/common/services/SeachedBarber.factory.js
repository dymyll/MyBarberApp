(function() {

  angular
    .module('BarberApp')
    .factory('SearchedBarber', searchedBarber);

  //selectedData.$inject = ['$http'];
  function searchedBarber () {
      return {
          searchedCity : '',
          searchedShop: ''
      };
  }

})();