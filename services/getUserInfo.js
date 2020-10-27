angular.module("app").service('getUserInfoService',function($http,getUserProflePicByIdService) {
 
    this.getInfo = function(id){
    return $http.get('/api1/profiles/show/'+id).then(function(response) {   
        return response.data.User;
       });
    }
   
});

