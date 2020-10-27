angular.module("app").service('getUserProflePicByIdService',function($http,getAndSetUserIdService) {
    
       this.getUserProflePicById = function(userId){
        
            return $http.get("/images/avatars/"+userId+".jpg").then(function(response) {   
                console.log(response)
                return response;
            });
   
   };
});