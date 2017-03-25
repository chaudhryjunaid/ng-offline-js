module.exports = angular.module("ng-offline-js", [])
.factory('ngOfflineJsInterceptor', ['$q', function($q) {
  var Interceptor = {
    responseError: function(response){
      Offline.check();
      return $q.reject(response);
    }
  };
  return Interceptor;
}])
.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('ngOfflineJsInterceptor');
}])
.name;
