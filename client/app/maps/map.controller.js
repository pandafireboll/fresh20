/**
 * Created by Fox on 4/11/2015.
 */
'use strict';

angular.module('fresh2oApp')
  .controller("MapCtrl", ['$scope','uiGmapGoogleMapApi','getLocation',function($scope, uiGmapGoogleMapApi,getLocation) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 14 };
      getLocation.location().then(function(value){
        $scope.map.center = value;
      })
    });
  }]);
