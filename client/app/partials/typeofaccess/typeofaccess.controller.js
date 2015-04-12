'use strict';

angular.module('fresh2oApp')
  .controller('TypeofaccessCtrl', function ($scope, $http) {
    $scope.typesofaccess = [];

    $http.get('/api/typeofaccess').success(function(typesofaccess) {
      console.log('hello');
      $scope.typesofaccess = typesofaccess;
    });
    console.log('end');
  });
