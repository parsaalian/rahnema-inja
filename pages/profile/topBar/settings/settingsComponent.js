function settingController($scope, getUserInfoService) {
	userId=1;
	getUserInfoService.getInfo(userId).then(function(response) {

		$scope.info = {
			email: response.email,
			username: response.username
		};
		console.log($scope.info);
		return $scope.info;

    });
};
angular.module("app").component("setting", {
    templateUrl: "/pages/profile/topBar/settings/settings.html",
    controller: settingController
});