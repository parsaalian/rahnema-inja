angular.module("app").factory("getAndSetIsHisFriend", function() {
    function set(isHisFriend) {
      isFriend = isHisFriend;
        }
    function get() {
     return isFriend;
    }
   
    return {
     set: set,
     get: get
    }
   
});