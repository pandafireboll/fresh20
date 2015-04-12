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
      $scope.map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        options: {
          minZoom: 2
        },
        zoom: 13,
        markers: [
          {id:0, latitude: 33.71, longitude: -117.8},
          {id:1, latitude: 33.64, longitude: -117.9},
          {id:2, latitude: 33.68, longitude: -117.8471722},
          {id:3, latitude: 33.70,longitude: -117.9},
          {id:4, latitude: 33.697898,longitude: -117.8471724}]
      };

      getLocation.location().then(function(value){
        $scope.map.center = value;
      })
    });
  }]);
