angular.module("app").service('postSearchInfoService',function($http) {

    this.postSearchInfo= function(userId,searchPhrase){
        return $http.get("/api1/profiles/search/"+userId+"/"+searchPhrase) .then(function (response) {
            console.log(response.data);
        return response.data;
    });      
}    
});