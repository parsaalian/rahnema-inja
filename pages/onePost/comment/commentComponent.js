function commentController($scope,getUserInfoService, getOnePostInfoService,getAndSetPostIdService) {

	var postId=getAndSetPostIdService.get();
	getOnePostInfoService.getPost(postId).then(function(response) {
		$scope.comments = {			
			comments: response.comments
		};
		for(var i=0;i<$scope.comments.comments.length;i++){
			var str= $scope.comments.comments[i].date;
			$scope.comments.comments[i].date = moment(str, "YYYYMMDDhhmmss").fromNow();
		}
		console.log($scope.comments)
		return $scope.comments;
	});
};

angular.module("app").component("comment", {
	templateUrl: "/pages/onePost/comment/comment.html",
	controller: commentController
});