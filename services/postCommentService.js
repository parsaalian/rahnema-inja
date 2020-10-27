angular.module("app").service('postCommentService',function($http) {   
       this.postComment = function(data,postId){
    console.log(data);
       $http.post("/api2/posts/"+postId+"/addcomment",data);
   };
   });