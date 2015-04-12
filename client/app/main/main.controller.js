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
  .controller('InputCtrl', function ($scope, $http) {
      $scope.inputs = [{field:'Name',type:0},{field:'User',type:1},{field:'Info',type:2},{field:'Type',type:3},{field:'Location',type:4}];

      $scope.result = [];
      $scope.submitInput = function(){
        $http.post('/api/things',{"name": $scope.result[0], "user": $scope.result[1], "info": $scope.result[2], "type": $scope.result[3], "location": { "latitude": "lol", "longitude": $scope.result[4]}});
      };

  });