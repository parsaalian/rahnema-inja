angular.module("app").service("getAndSetTokenService", function($state) {
  var tokenIsSet=false;
    function set(theToken) {
      token = theToken;
      tokenIsSet=true;
    }
    function get() {
      if(!tokenIsSet){
        return 'Basic dHJ1c3RlZC1hcHA6c2VjcmV0';
      }
      else{
     return "Bearer "+token;
    }
    }
   
    return {
     set: set,
     get: get
    }
   
   });