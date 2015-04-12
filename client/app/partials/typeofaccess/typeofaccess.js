'use strict';

angular.module('fresh2oApp')
  .config(function ($stateProvider) {
    // $routeProvider
    //   .when('/typeofaccess', {
    //     templateUrl: 'app/partials/typeofaccess/typeofaccess.html',
    //     controller: 'TypeofaccessCtrl'
    //   });
 	$stateProvider
      .state('typeofaccess', {
        url: '/typeofaccess',
        templateUrl: 'app/partials/typeofaccess/typeofaccess.html',
        controller: 'TypeofaccessCtrl'
      });
  });
