function forget($scope,postResetPassService) {
    $scope.sendEmail = function(){
        $scope.resetPassEmail=document.getElementById("resetPassEmail").value;
        if($scope.resetPassEmail!=""){
            var data={
                "email": $scope.resetPassEmail
            }
        }
        postResetPassService.postResetPassEmail(data);
    };
}
angular.module("app").component("forget", {
    templateUrl: "/pages/firstPage/forget/forget.html",
    controller : forget
});