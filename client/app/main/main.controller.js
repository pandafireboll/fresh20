'use strict';

angular.module('fresh2oApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  })
  .controller('InputCtrl', function ($scope, $http, $state, $stateParams) {
      $scope.inputs = [{field:'Name',type:0},{field:'Info',type:1}];

      console.log($stateParams);
      console.log($state);
      $scope.result = [];
      $scope.result[3]= {};
      $scope.submitInput = function(){
        $http.post('/api/things',{"name": $scope.result[0], "user": 1, "info": $scope.result[1], "type": $stateParams.type, "location": { "latitude": $scope.result[3].latitude, "longitude": $scope.result[3].longitude}});
      };

  });