function signController($scope,postSignInInfoService,postLogInInfoService) {
    $scope.signIn = function(){
        var flag=false;
        $scope.signInUsername=document.getElementById("signInUsername").value;
        $scope.signInName=document.getElementById("signInName").value;
        $scope.signInEmail=document.getElementById("signInEmail").value;
        $scope.signInPass=document.getElementById("signInPass").value;
        $scope.signInPassRepeat=document.getElementById("signInPassRepeat").value;
        if($scope.signInPass==$scope.signInPassRepeat && $scope.signInUsername!="" && $scope.signInName!="" && $scope.signInEmail!="" && $scope.signInPass!=""){
            var data={
                "User":{
                    "username": $scope.signInUsername,
                    "email": $scope.signInEmail,
                    "name": $scope.signInName,
                    "password": $scope.signInPass
                }
            }
            postSignInInfoService.postSignInInfo(data,$scope.signInUsername,$scope.signInPass);            
        }
        else if($scope.signInPass!=$scope.signInPassRepeat){
            setTimeout(function() {
                alert("رمزها هم خوانی ندارند");
              });
        }
        document.getElementById("signInUsername").value="";
        document.getElementById("signInName").value="";
        document.getElementById("signInEmail").value="";
        document.getElementById("signInPass").value="";
        document.getElementById("signInPassRepeat").value="";      
    };
    $scope.logIn = function(){
        $scope.logInUsername=document.getElementById("logInUsername").value;
        $scope.logInPass=document.getElementById("logInPass").value;

        if($scope.logInPass!="" && $scope.logInUsername!="" ){
           postLogInInfoService.logInInInfo($scope.logInUsername,$scope.logInPass);
    }
        document.getElementById("logInUsername").value="";
        document.getElementById("logInPass").value="";
        

    };
    $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
    };
}
