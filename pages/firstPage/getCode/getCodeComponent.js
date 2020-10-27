function getCodeController($scope,postResetPassService) {
    $scope.sendTokenAndNewPass = function(){
        $scope.tokenCode=document.getElementById("tokenCode").value;
        $scope.newPassForget=document.getElementById("newPassForget").value;
        $scope.newPassForgetRepeat=document.getElementById("newPassForgetRepeat").value;       

        if($scope.tokenCode!="" && $scope.newPassForget!="" && $scope.newPassForgetRepeat!="" && $scope.newPassForgetRepeat==$scope.newPassForget){
            var data={
                    "passwordResetToken": $scope.tokenCode, 
                    "password": $scope.newPassForget
            }
            postResetPassService.postNewPassAndToken(data);
        }
        else if($scope.newPassForgetRepeat!=$scope.newPassForget){
            setTimeout(function() {
                alert("رمزها هم خوانی ندارند");
              });
        }
        
    };
}



angular.module("app").component("getCode", {
    templateUrl: "/pages/firstPage/getCode/getCode.html",
    controller: getCodeController
});