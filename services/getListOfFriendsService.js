angular.module("app").service('getListOfFriendsService',function($http) {
    this.getListOfFriends= function(userId){
        return $http.get("/api2/users/"+userId+"/friends").then(function(response) {              
        return response.data;
    });
}
});