angular.module("app").service('getUserIdFromServerService',function($http,getAndSetUserIdService,getAndSetProfileIdService) {
    
       this.getUserIdFromServer = function(){
       $http({
        url : "/api1/user",
        method : "POST",
     }).success(function(res) { 
        getAndSetUserIdService.set(res.id);
        getAndSetProfileIdService.set(res.id);
        console.log("id set",getAndSetProfileIdService.get());
    });
   }
});
   