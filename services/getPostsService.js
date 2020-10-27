angular.module("app").service('getPostsService', function ($http) {
    this.getPosts = function (userId) {
        return $http.get("/api2/users/"+userId+"/posts").then(function (response) {
            return response.data;
        });
    }
});