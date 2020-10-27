function infoController($scope, getUserInfoService, getAndSetUserIdService,getAndSetProfileIdService, getUserProflePicByIdService,getAndSetProfileIdService) {
	theUserId = getAndSetProfileIdService.get();
	$scope.showMore = false;
		getUserInfoService.getInfo(theUserId).then(function (response) {
		$scope.info = {
			name: response.name,
			caption: response.quote,
			// image: "http://192.168.11.185/images/avatars/" + theUserId + ".jpg",
			image: "http://5e71f405.ngrok.io/images/avatars/" + theUserId + ".jpg",
			// image: "http://localhost:53140/images/avatars/" + theUserId + ".jpg",						
			tags: response.tags,
			email: response.email,
			username: response.username
		};
		$scope.moreOrNor = $scope.info.tags.length > 5 ;
		return $scope.info;
	});
	getUserProflePicByIdService.getUserProflePicById(theUserId).then(function (response) {
		$scope.image = {
			image: response
		};
	});

	$scope.showMoreTags = function showMoreTags(){
		$scope.showMore = true;
	};
	$scope.showLessTags = function showLessTags(){
		$scope.showMore = false;
	};
};

angular.module("app").component("info", {
	templateUrl: "/pages/profile/info/info.html",
	controller: infoController
});