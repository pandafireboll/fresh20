'use strict';

angular.module('fresh2oApp')
  .controller('TypeofaccessCtrl', function ($scope, $http) {
    $scope.typesofaccess = [];

    $http.get('/api/typeofaccess').success(function(typesofaccess) {
      $scope.typesofaccess = typesofaccess;
    });
  });
