angular.module("app").service('postEditResultService',function($http) {   
    this.postEditResult = function(data){
    $http.put("/api1/profiles/edit",data);
};
});