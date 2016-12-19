function MainController($scope) {
  $scope.contact = {
    name: 'Han Lee',
    phone: '01234567890'
  };

  $scope.year = '2016';
}


angular
  .module('app')
  .controller('MainController', MainController);
