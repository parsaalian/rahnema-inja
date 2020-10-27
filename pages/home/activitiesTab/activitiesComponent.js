function activitiesController($scope,getActivitiesService,getAndSetUserIdService,getUserInfoService) {
    
    var currentPageOfActivity = 0;
    var userId = getAndSetUserIdService.get();
    var numberOfElementsOfActivity = 10;
    var friendName;
    getActivitiesService.getActivities(userId, currentPageOfActivity, numberOfElementsOfActivity).then(function (response) {
        $scope.activities = {
            activities: response
        };
        $scope.totalPagesOfActivity = $scope.activities.activities.totalPagesOfActivity;
		for(var i=0;i<$scope.activities.activities.content.length;i++){
            var str= $scope.activities.activities.content[i].date;
            var friendId = $scope.activities.activities.content[i].friendId;
            $scope.activities.activities.content[i].date = moment(str, "YYYYMMDDhhmmss").fromNow();
            if($scope.activities.activities.content[i].activityFlag=="like"){
                $scope.activities.activities.content[i].activityFlag = $scope.activities.activities.content[i].nameOfOwner+" پست زیر را لایک کرد ";
            }
            if($scope.activities.activities.content[i].activityFlag=="comment"){
                $scope.activities.activities.content[i].activityFlag = $scope.activities.activities.content[i].nameOfOwner+" روی پست زیر کامنت گذاشت"
            }
        }

        return $scope.activities;
    });

    document.addEventListener('scroll', function (event) {
        
        if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
            if (currentPageOfActivity < $scope.totalPagesOfActivity) {
                currentPageOfActivity = currentPageOfActivity + 1;
                getActivitiesService.getActivities(userId, currentPageOfActivity, numberOfElementsOfActivity).then(function (res) {
                    console.log("tania",res);
                    for (var i = 0; i < res.content.length; i++) {
                        console.log("i",res.content[i]);
                        $scope.activities.activities.content.push(res.content[i]);
                    }
                });
            }
        }
    });

    };
    angular.module("app").component("activities", {
        templateUrl: "/pages/home/activitiesTab/activities.html",
        controller: activitiesController
    });
    