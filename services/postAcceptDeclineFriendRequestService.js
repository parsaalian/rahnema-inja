angular.module("app").service('postAcceptDeclineFriendRequestService', function ($http) {
    this.postFriendRequest = function (data) {
        $http.post("/api2/friends/request", data);
    };
    this.acceptFriendRequest = function (data) {
        $http.post("/api2/friends/accept", data);
    };
    this.rejectFriendRequest = function (data) {
        $http.post("/api2/friends/reject", data);
    };
    this.isMyFriend = function (dta) {      
        $http({
			url : "/api2/friends/ismyfriend",
			method : "POST",
		}).success(function(res) { 
            console.log("ookay");
            getAndSetIsHisFriend.set(res);
        });
    };

});