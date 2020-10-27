angular.module('app').controller('modalCtrl', function ($scope,$state,$filter, $modal, $log,getAndSetProfileIdService,getAndSetPostPictureName,uploadPostPicService,uploadProfilePicService,getAndSetTokenService,getAndSetUserIdService,postSettingsResultService,getAndSetLocationInCheckIn,postEditResultService,getUserInfoService,postCheckInInfoService) {
    
    $scope.setDate = false;    
    $scope.tags=[];
    $scope.theTags=[];
    $scope.open = open;
    userId=getAndSetUserIdService.get();
    $scope.profileId=getAndSetProfileIdService.get();
    $scope.thatUserId=userId;
    $scope.birthDayDate;

    function open(template, size, backdrop, itemCount, closeOnClick) {

        var getDatetime = new Date();
        var params = {
            templateUrl: template,
            resolve: {
                items: function () {
                    return $scope.items;
                },
            },
            controller: function ($scope,Upload, $modalInstance) {

                $scope.reposition = function () {
                    $modalInstance.reposition();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

                $scope.openNested = function () {
                    open();
                };
                $scope.tagAdded = function(tag) {
                    $scope.theTags.push(tag.text);
                };
                $scope.tagRemoved = function(tag) {
                    var index = $scope.theTags.indexOf(tag.text);
                    $scope.theTags.splice(index, 1);
                };
                
                getUserInfoService.getInfo(userId).then(function(response) {
                    $scope.info = {
                        email: response.email,
                        name: response.name,     
                        avatar:response.avatarURL, 
                        quote: response.quote,
                        tags: response.tags,
                        username: response.username
                    };  
                    return $scope.info;
                });
                getUserInfoService.getInfo(userId).then(function(response){
                    $scope.tags = response.tags;
                    $scope.theTags=response.tags;
                });
                $scope.changeEditSettings = function (){
                    $scope.nameInEdit=document.getElementById("nameInEdit").value;
                    $scope.quoteInEdit=document.getElementById("quoteInEdit").value;
                    if($scope.nameInEdit==""){
                        $scope.nameInEdit=$scope.info.name;
                    }
                    if($scope.quoteInEdit==""){
                        $scope.quoteInEdit=$scope.info.quote;
                    }
                    if(!$scope.setDate){
                        var data={
                            "id": userId,
                            "username": $scope.info.username,
                            "email": $scope.info.email,
                            "name": $scope.nameInEdit,
                            "quote": $scope.quoteInEdit,
                            "tags": $scope.theTags
                        }
                    }
                    else{

                        var data={
                            "id": userId,
                            "birthday": $scope.birthDayDate,
                            "username": $scope.info.username,
                            "email": $scope.info.email,
                            "name": $scope.nameInEdit,
                            "quote": $scope.quoteInEdit,
                            "tags": $scope.theTags
                        }                    

                    }
                    console.log("DSD",data)
                    postEditResultService.postEditResult(data);
                    $scope.setDate = false;
                    $state.go('profile', {}, { reload: 'profile' });                    
                };
                $scope.changeSettings = function (){
                    $scope.usernameInSettings=document.getElementById("usernameInSettings").value;
                    $scope.emailInSettings=document.getElementById("emailInSettings").value;
                    $scope.oldPassInSettings=document.getElementById("oldPassInSettings").value;
                    $scope.newPassInSettings=document.getElementById("newPassInSettings").value;

                    if($scope.usernameInSettings==""){
                        $scope.usernameInSettings=$scope.info.username;
                    }
                    if($scope.emailInSettings==""){
                        $scope.emailInSettings=$scope.info.email;
                    }
                    var data={
                        "id": userId,
                        "username": $scope.usernameInSettings,
                        "email": $scope.emailInSettings,
                        "oldPass":$scope.oldPassInSettings,
                        "newPass": $scope.newPassInSettings
                    }
                    console.log(data);
                    postSettingsResultService.postSettingsResult(data);
                    $state.go('profile', {}, { reload: 'profile' })
                };

                $scope.logout = function (){    
                    getAndSetTokenService.set('Basic dHJ1c3RlZC1hcHA6c2VjcmV0');
                    getAndSetUserIdService.set(0);
                    getAndSetProfileIdService.set(0);    
                };

                $scope.checkIn = function (){
                    $scope.inputCaption=document.getElementById("inputCaption").value;
                    var data={ 
                       "idOfOwner": userId,     
                       "postTitle": getAndSetLocationInCheckIn.get(),   
                        "nearBy": getAndSetLocationInCheckIn.get(),
                        "text" : $scope.inputCaption,
                        "images": getAndSetPostPictureName.get(),
                        "latitude": "",
                        "longitude": ""
      
                    };
                    console.log("post",data)
                    postCheckInInfoService.checkInInfo(data);
                    $state.go('profile', {}, { reload: 'profile' });
                    getAndSetPostPictureName.set("delete");
                };

                $scope.nextPage = function () {
                    $scope.inputPlace = document.getElementById("inputPlace").value;
                    getAndSetLocationInCheckIn.set($scope.inputPlace);
                };
                $scope.uploadProfilePic = function(file) {
                    uploadProfilePicService.uploadProfilePic(file,userId);   
                    //uploadProfilePicService.tellServerPicHasChanged(userId);             
                };
                $scope.uploadPostPics = function(files) { 
                    document.getElementById("checkInBtn").disabled=true;
                    getAndSetPostPictureName.set("delete");
                    for (var i = 0; i < files.length; i++) {
                       uploadPostPicService.uploadPostPic(files[i],userId); 
                      } 
                                
                };
                $scope.setBirthDate = function() { 
                    var day = document.getElementById("day").value;
                    var month = document.getElementById("month").value;
                    var year = document.getElementById("year").value;                    
                    $scope.birthDayDate = year+"-"+month+"-"+day;
                    $scope.setDate=true;
                };
                
                
            }
        };

        if (angular.isDefined(closeOnClick)) {
            params.closeOnClick = closeOnClick;
        }

        if (angular.isDefined(size)) {
            params.size = size;
        }

        if (angular.isDefined(backdrop)) {
            params.backdrop = backdrop;
        }

        var modalInstance = $modal.open(params);
    };
});
