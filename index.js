module.exports = angular.module("ng-offline-js", [])
.factory('ngOfflineJsInterceptor', function(){
  var Interceptor = {
    responseError: function(response){
      Offline.check();
      return response;
    },
    response: function(response){
      return response;
    }
  };
  return Interceptor;
})
.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('ngOfflineJsInterceptor');
}])
.name;
