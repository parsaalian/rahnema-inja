function infoSettingController($scope, getUserInfoService,getAndSetUserIdService,getAndSetProfileIdService) {
	userId = getAndSetUserIdService.get();
	searchPhrase= document.getElementById('textTag').value;
	getUserInfoService.getInfo(userId).then(function(response) {
		$scope.info = {
			name: response.name ,
			caption: response.quote ,
			// image: "http://192.168.11.185/images/avatars/"+userId+".jpg",
			image: "http://5e71f405.ngrok.io/images/avatars/"+userId+".jpg",
			// image: "http://localhost:53140/images/avatars/"+userId+".jpg",			
			tags: response.tags,
			email: response.email,
			username: response.userName
		};
		return $scope.info;
	});

	$scope.toggleCanvas = function() {
		if(document.getElementById("half-profile") == null) {
			document.getElementById("full-profile").id = "half-profile";
			document.getElementById("toggle-out").id = "toggle-in";
		}
		else if(document.getElementById("full-profile") == null) {
			document.getElementById("half-profile").id = "full-profile";
			document.getElementById("toggle-in").id = "toggle-out";
		}
	}

	$scope.goToProfile = function () {
		getAndSetProfileIdService.set(userId);
		
	}
};

angular.module("app").component("topbar", {
	templateUrl: "/pages/profile/topBar/topBar.html",
	controller: infoSettingController
});