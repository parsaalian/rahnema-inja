angular.module("app").service('getHomePostsService', function ($http) {
    this.getHomePosts = function (userId,pageNumber,numberOfElement) {
        return $http.get("/api2/home/"+userId+"?page="+pageNumber+"&size="+numberOfElement+"&sort=date,desc").then(function (response) {
          console.log("homePosts",response.data)
            return response.data;
        });
    }
});