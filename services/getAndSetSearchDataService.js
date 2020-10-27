angular.module("app").service('getAndSetSearchDataService',function($http) {
    function set(res) {
        result = res;
      }
      function get() {
       return result;
      }
     
      return {
       set: set,
       get: get
      }
});