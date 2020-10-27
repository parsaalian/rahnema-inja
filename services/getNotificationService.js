angular.module("app").service('getNotificationService', function ($http) {
    this.getNotification = function (userId) {
        return $http.get("/api2/" + userId + "/getnotifications").then(function (response) {
            return response.data;
        });
    }
});