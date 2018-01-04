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

app.controller('ClientController', ['$scope', '$http', function ($scope, $http) {
  // $scope.clients = [
  //   {id: 1, name: "a", pref: "H"},
  //   {id: 2, name: "b", pref: "O"},
  //   {id: 3, name: "c", pref: "O"},
  // ];

  $scope.getClient = function () {
    // $scope.clients.push({id: 999, name: "x", pref: "S"});
    // console.log($scope.clients);
    $http({
      method: 'GET',
      url: "http://localhost:3000/api/v1/clients/get",
    }).then( function (data) {
      var c = data.data;
      c.pref = "ajax";
      // console.log(c);
      $scope.clients.push(c);
    }, function (err) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  };

}]);
