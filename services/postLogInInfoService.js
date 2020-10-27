angular.module("app").service('postLogInInfoService', function ($http,$state,getAndSetTokenService,getUserIdFromServerService, getAndSetUserIdService) {
    this.logInInInfo = function (username, pass) {      
        $http({
			url : "/api1/oauth/token?grant_type=password&username="+username+"&password="+pass,
			method : "POST",
		}).success(function(res) { 
            getAndSetTokenService.set(res.access_token);
        }).success(function(){
            getUserIdFromServerService.getUserIdFromServer();
        }).error(function(){
            setTimeout(function() {
                alert("نام کاربری یا رمز عبور اشتباه است");
            });
        });

    };


});


