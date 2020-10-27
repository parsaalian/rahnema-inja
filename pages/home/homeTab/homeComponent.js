function homeController($scope, getHomePostsService, getAndSetUserIdService, getUserInfoService) {

    var currentPage = 0;
    var userId = getAndSetUserIdService.get();
    var numberOfElements = 10;
    getHomePostsService.getHomePosts(userId, currentPage, numberOfElements).then(function (response) {
        $scope.homePosts = {
            posts: response
        };
        $scope.totalPages = $scope.homePosts.posts.totalPages;
		for(var i=0;i<$scope.homePosts.posts.content.length;i++){
			var str= $scope.homePosts.posts.content[i].date;
			$scope.homePosts.posts.content[i].date = moment(str, "YYYYMMDDhhmmss").fromNow();
        }
        

        return $scope.homePosts;
    });
    getUserInfoService.getInfo(userId).then(function (response) {
        $scope.postOwner = {
            name: response.name,
            // image: "http://localhost:53140/images/avatars/"+userId+".jpg"            
             image: "http://192.168.10.129//images/avatars/" + userId + ".jpg"
            // image: "http://192.168.11.185/images/avatars/"+userId+".jpg"
        };
        return $scope.postOwner;

    });

    document.addEventListener('scroll', function (event) {
        
        if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {console.log("bye")
            if (currentPage < $scope.totalPages) {
                currentPage = currentPage + 1;
                getHomePostsService.getHomePosts(userId, currentPage, numberOfElements).then(function (response) {
                    for (var i = 0; i < response.content.length; i++) {
                        console.log(response.content[i]);
                        $scope.homePosts.posts.content.push(response.content[i]);
                    }
                });
            }
        }
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



angular.module("app").component("home", {
    templateUrl: "/pages/home/homeTab/home.html",
    controller: homeController
});
