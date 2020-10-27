function postController($scope, getPostsService, getUserInfoService, getAndSetUserIdService,getAndSetProfileIdService) {
	$scope.theSlideIndex = 1;
	theUserId = getAndSetProfileIdService.get();

	getPostsService.getPosts(theUserId).then(function (response) {
		$scope.posts = {
			posts: response
		};
		for(var i=0;i<$scope.posts.posts.length;i++){
			var str= $scope.posts.posts[i].date;
			$scope.posts.posts[i].date = moment(str, "YYYYMMDDhhmmss").fromNow();
		}
		return $scope.posts;
	});

	getUserInfoService.getInfo(theUserId).then(function (response) {
		$scope.postOwner = {
			id: response.id,
			name: response.name,
			image: response.avatarURL
		};
		console.log(response)
		return $scope.postOwner;

	});

	var width = screen.width * 0.4166666;
	width += "px";
	$scope.widthStyle = {
		"width": width
	}
	$scope.heightStyle = {
		"height": width,
		"background-color": "black"
	};
};

angular.module("app").component("post", {
	templateUrl: "/pages/profile/postTabs/post/post.html",
	controller: postController
});

