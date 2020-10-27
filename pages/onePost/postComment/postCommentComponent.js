function postCommentController($scope,$state,$filter,postCommentService,getAndSetPostIdService,getAndSetUserIdService,) {
	var postId=getAndSetPostIdService.get();
	var userId=getAndSetUserIdService.get();
	$scope.postCm = function postTheComment(){
		var data={		
				"idOfOwner": userId,
				"text": document.getElementById("commentTextField").value,
		};
		postCommentService.postComment(data,postId);

		document.getElementById("commentTextField").value="";
		$state.go('post', {postId:postId}, { reload: 'post' })
	};
};

angular.module("app").component("postComment", {
	templateUrl: "/pages/onePost/postComment/postComment.html",
	controller: postCommentController
	
});