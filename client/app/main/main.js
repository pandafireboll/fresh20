'use strict';

angular.module('fresh2oApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      //added route for userChoice.html partial
      .state('userType', {
        url: '/userType',
        templateUrl: 'app/partials/userChoice.html',
        controller: 'MainCtrl'
      })
      //added route for average.html submission form
      .state('average', {
        url: '/average',
        templateUrl: 'app/partials/average.html',
        controller: 'MainCtrl'
      })
      //added route for technical.html submission form
      .state('technical', {
        url: '/technical',
        templateUrl: 'app/partials/technical.html',
        controller: 'MainCtrl'
      })
      // .state('typeofaccess', {
      //   url: '/typeofaccess',
      //   templateUrl: 'app/partials/typeofaccess/typeofaccess.html',
      //   controller: 'TypeofaccessCtrl'
      // })
      ;
  });
