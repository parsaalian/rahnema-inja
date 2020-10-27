angular.module("app").service('getOnePostInfoService',function($http) {
       this.getPost= function(postId){
           return $http.get("/api2/posts/"+postId).then(function(response) {    
           return response.data;
       });
   }
   });