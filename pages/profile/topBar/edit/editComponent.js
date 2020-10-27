function editController($scope, getUserInfoService) {
	userId=1;
	getUserInfoService.getInfo(userId).then(function(response) {
		$scope.info = {
            quote: response.quote,
            name: response.name,     
            avatar:response.avatarURL,       
			tags: response.tags
		};
		return $scope.info;

    });
};

angular.module("app").component("edit", {
	templateUrl: "/pages/profile/topBar/edit/edit.html",
	controller: editController
});