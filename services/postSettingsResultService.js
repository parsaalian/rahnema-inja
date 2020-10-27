angular.module("app").service('postSettingsResultService',function($http) {   
    this.postSettingsResult = function(data){
    $http.put("/api1/profiles/changePassword",data);
};
});