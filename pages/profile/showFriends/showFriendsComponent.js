function showFriendsController($scope, getListOfFriendsService, getAndSetUserIdService,getAndSetProfileIdService) {
	theUserId = getAndSetProfileIdService.get();
	getListOfFriendsService.getListOfFriends(theUserId).then(function (response) {
		$scope.friends = response;
		return $scope.friends;
	});

	$scope.showFriendProfile = function showFriendProfile(friendId){
		getAndSetProfileIdService.set(friendId);
	}

};

angular.module("app").component("showFriends", {
	templateUrl: "/pages/profile/showFriends/showFriends.html",
	controller: showFriendsController
});