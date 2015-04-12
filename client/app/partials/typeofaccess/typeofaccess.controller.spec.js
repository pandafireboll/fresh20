'use strict';

describe('Controller: TypeofaccessCtrl', function () {

  // load the controller's module
  beforeEach(module('fresh2oApp'));

  var TypeofaccessCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypeofaccessCtrl = $controller('TypeofaccessCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
