angular.module("app").service('postSignInInfoService',function($http,postLogInInfoService) {
    this.postSignInInfo= function(data,username,pass){
        $http.post("/api1/register",data).success(function(){
        postLogInInfoService.logInInInfo(username,pass);
        }).error(function(){
        setTimeout(function() {
            alert("این نام کاربری یا ایمیل قبلا وجود داشته است ");
          });
        });
    };
});