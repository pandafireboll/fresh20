'use strict';

angular.module('fresh2oApp')
  .config(function ($stateProvider) {
	  $stateProvider
      .state('typeofaccess', {
        url: '/typeofaccess',
        templateUrl: 'app/partials/typeofaccess/typeofaccess.html',
        controller: 'TypeofaccessCtrl'
      });
  });
