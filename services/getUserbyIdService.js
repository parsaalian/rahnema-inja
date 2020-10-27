angular.module("app").service('getUserByIdService',function($http) {
    
       this.getUserById = function(userId){
       return $http.get("/api1/profiles/show/"+userId).then(function(response) {   
           return response.data;
       
       });
   }
   });
   
   