
function searchController($scope,$state,$http,$stateParams,postSearchInfoService,getAndSetProfileIdService,getAndSetUserIdService,postAcceptDeclineFriendRequestService) {
	var searchPhrase=$stateParams.searchPhrase;
	userId=getAndSetUserIdService.get();
	$scope.notFound=false;
	result=postSearchInfoService.postSearchInfo(userId,searchPhrase).then(function(response) {
		$scope.notFound=false;		
		$scope.searchResult = response
		if($scope.searchResult==""){
			$scope.notFound=true;
			setTimeout(function() {
				alert("کاربری با این نام وجود ندارد");
			});
		}
		return $scope.searchResult;
	});
	$scope.sendRequest = function sendRequest(friendId) {
		data={
			"myUserId" : userId,
			"hisUserId" : friendId
		}
		console.log("sent");
		postAcceptDeclineFriendRequestService.postFriendRequest(data);
				$state.go('searchResult', {searchPhrase:searchPhrase}, { reload: 'searchResult' })
	}
	$scope.acceptRequest = function acceptRequest(friendId) {
		data={
			"myUserId" : userId,
			"hisUserId" : friendId
		}
		postAcceptDeclineFriendRequestService.acceptFriendRequest(data);
		$state.go('searchResult', {searchPhrase:searchPhrase}, { reload: 'searchResult' });
		
	}
	$scope.rejectRequest = function acceptRequest(friendId) {
		data={
			"myUserId" : userId,
			"hisUserId" : friendId
		}
		postAcceptDeclineFriendRequestService.rejectFriendRequest(data);
		$state.go('searchResult', {searchPhrase:searchPhrase}, { reload: 'searchResult' });
	}

	$scope.goToSearchResultProfile = function goToSearchResultProfile(resultId){
		getAndSetProfileIdService.set(resultId);
		data={
			"myUserId" : userId,
			"hisUserId" : resultId
		}
	}

};

angular.module("app").component("search", {
	templateUrl: "/pages/search/searchResult.html",
	controller: searchController
});



