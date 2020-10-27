function notificationController($scope, getNotificationService, getAndSetUserIdService) {
    userId = getAndSetUserIdService.get();

    /*getNotificationService.getNotification(userId).then(function (response) {
        $scope.notifications = {
            notifications: response
        };
        console.log($scope.notifications);
        return $scope.notifications;
    });*/

    $scope.refresh = function () {
        getNotificationService.getNotification(userId).then(function (response) {
            $scope.notifications = {
                notifications: response
            };
            console.log($scope.notifications);
            return $scope.notifications;
        });
    }
}

angular.module('app').component('notification', {
    templateUrl: "/pages/profile/topBar/notification/notification.html",
    controller: notificationController
});