angular.module("app").service('postCheckInInfoService', function ($http) {
    this.checkInInfo = function (data) {
        $http.post("/api2/posts/new", data);
    };
});