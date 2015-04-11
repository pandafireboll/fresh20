/**
 * Created by Fox on 4/11/2015.
 */
'use strict';

angular.module('fresh2oApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/maps',
        templateUrl: 'app/maps/map.html',
        controller: 'MapCtrl'
      });
  });
