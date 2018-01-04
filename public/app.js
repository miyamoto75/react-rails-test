var app = angular.module('App', []);
app.controller('MainController', ['$scope', function ($scope) {
  $scope.number = 0;

  $scope.addNumber = function () {
    $scope.number++;
  };

  $scope.subNumber = function () {
    $scope.number--;
  };


}]);

app.controller('ClientController', ['$scope', function ($scope) {
  // $scope.clients = [
  //   {id: 1, name: "a", pref: "H"},
  //   {id: 2, name: "b", pref: "O"},
  //   {id: 3, name: "c", pref: "O"},
  // ];

  $scope.getClient = function () {
    $scope.clients.push({id: 999, name: "x", pref: "S"});
    // console.log($scope.clients);
  };

}]);
