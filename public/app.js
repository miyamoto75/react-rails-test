angular.module('App', [])
.controller('MainController', ['$scope', function ($scope) {
  $scope.number = 0;

  $scope.addNumber = function () {
    $scope.number++;
  };

  $scope.subNumber = function () {
    $scope.number--;
  };


}]);
