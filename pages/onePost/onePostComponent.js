function onePostController($scope, $stateParams, getUserInfoService, getOnePostInfoService, postLikeReportService, getAndSetPostIdService) {

	var postId = $stateParams.postId;
	$scope.theSlideIndex = 1;
	getAndSetPostIdService.set(postId);
	getOnePostInfoService.getPost(postId).then(function (response) {
		$scope.post = {
			text: response.text,
			images: response.images,
			comments: response.comments,
			likes: response.likes,
			date: moment(response.date, "YYYYMMDDhhmmss").fromNow(),
			nearBy: response.nearBy
		};
		$scope.userId = response.idOfOwner;
		return $scope.post;

	});



	getUserInfoService.getInfo(userId).then(function (response) {
		$scope.postOwner = {
			name: response.name,
			image: "http://192.168.10.129//images/avatars/" + userId + ".jpg"
		};
		return $scope.postOwner;

	});
	$scope.postLike = function postLike() {
		postLikeReportService.postLike(userId, postId);
		document.getElementById("theLikePic").src = "/photos/likedHeart.png";
	};





	$scope.plusSlides = function (n) {
		$scope.theSlideIndex = $scope.theSlideIndex + n;
		if ($scope.theSlideIndex > $scope.post.images.length) { $scope.theSlideIndex = 1 }
		if ($scope.theSlideIndex < 1) { $scope.theSlideIndex = $scope.post.images.length }

		document.getElementById("thePicOfPlace").src = "/images/postimages/" + $scope.post.images[$scope.theSlideIndex - 1];
	}

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


angular.module("app").component("onePost", {
	templateUrl: "/pages/onePost/onePost.html",
	controller: onePostController
});
