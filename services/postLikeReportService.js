angular.module("app").service('postLikeReportService',function($http) {   
    this.postLike = function(userId,postId){
    $http.post("/api2/posts/"+postId+"/addlike/"+userId);
};
});