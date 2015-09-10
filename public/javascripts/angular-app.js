var swapp = angular.module('swapp', []);

swapp.config(['$interpolateProvider', function($interpolateProvider) {
 $interpolateProvider.startSymbol('{|{');
 $interpolateProvider.endSymbol('}|}');
}]);

swapp.controller('charCtrl', function($scope, $http) {
  // $http.get, $http.post, $http.delete, $http.put

  $scope.api = '/characters';  // URL to an API

  $scope.fetch = function() {
    $http.get($scope.api).success(function(data) {
      console.log('Data ready');
      console.log(data);
      $scope.characters = data;
    });
  }

  $scope.create = function(name, planet) {
    // args: url, dataObject
    $http.post($scope.api, {name: name, planet: planet}).success(function(data, status) {
      $scope.fetch();
    });
  }

  $scope.delete = function(character) {
    console.log(character);
    var confirmDelete = confirm('Delete ' + character['name'] + '?');
    if (confirmDelete == true) {
      // '/characters/913283091-12312-123-123-123'
      $http.delete($scope.api + '/' + character['_id']);
      $scope.fetch();
    }
  }

  $scope.fetch();

});
