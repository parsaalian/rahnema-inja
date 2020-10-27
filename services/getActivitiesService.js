angular.module("app").service('getActivitiesService', function ($http) {
    this.getActivities = function (userId,pageNumber,numberOfElement) {
        return $http.get("/api2/activity/"+userId+"?page="+pageNumber+"&size="+numberOfElement+"&sort=date,desc").then(function (response) {
          console.log("activities",response.data)
            return response.data;
        });
    }
});