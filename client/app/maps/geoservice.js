/**
 * Created by Fox on 4/11/2015.
 */
var geoserv = angular.module('geoService',[]);

geoserv.factory('getLocation', ['$q',function ($q) {

  var location = function() {
    var deferred = $q.defer();
    if (navigator.geolocation){
      //W3C geolocation method gets location data
      navigator.geolocation.getCurrentPosition(function(position){
        var initialLocation = {latitude:position.coords.latitude,longitude:position.coords.longitude};
        deferred.resolve(initialLocation);
      }, function (error) {
        deferred.reject(error)
      });
    } else
    {
      return "Geolocation is not supported by this browser.";
    }
    return deferred.promise;
  };

  return {
    location: location
  }
}]);

