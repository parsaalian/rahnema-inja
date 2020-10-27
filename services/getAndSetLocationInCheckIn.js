angular.module("app").factory("getAndSetLocationInCheckIn", function() {
    function set(location) {
      theLocation = location;
    }
    function get() {
     return theLocation;
    }
   
    return {
     set: set,
     get: get
    }
   
   });