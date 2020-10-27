angular.module("app").service("getAndSetUserIdService", function($state) {
  var flag=false;
    function set(id) {
      userId = id;
      flag=true; 
      $state.go('profile', {}, { reload: 'profile' });
      console.log(" dklj",userId);
      
    }
    function get() {
      if(!flag){
        return 0;
      }
      else{
     return userId;}
    }
   
    return {
     set: set,
     get: get
    }
   
   });