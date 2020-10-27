angular.module("app").service('postResetPassService', function ($http,$state) {    
var alertStr;
this.postResetPassEmail = function (data) {      
    $http({
        url : "/api1/profiles/forgotPassword",
        data: data,
        method : "POST",
    }).success(function(res){

        if(res=="There is no user with this email."){
            alertStr="ایمیل وارد شده صحیح نمی باشد"
        }
        else if(res=="Email sent successfully."){
            alertStr="کد امنیتی به ایمیل شما ارسال شد"
        }
        setTimeout(function() {
            alert(alertStr);
        });
        if(res=="Email sent successfully."){
            $state.go('getCode', {}, { reload: 'getCode' })            
        }
    });
};

this.postNewPassAndToken = function(data){
    $http({
        url : "/api1/profiles/resetPassword",
        data: data,
        method : "POST",
    }).success(function(res){
        if(res=="Your token is not valid."){
            alertStr="کد وارد شده صحیح نمی باشد"
        }
        else if(res=="Your password has been changed successfully."){
            alertStr="رمز عبور شما با موفقیت تغییر یافت"
        }
        setTimeout(function() {
            alert(alertStr);
        });
    });

};

});