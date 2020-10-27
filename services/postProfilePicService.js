angular.module("app").service('uploadProfilePicService',function($http,Upload) {
    
    this.uploadProfilePic = function (file,userId) {  
        console.log("hdjkshfjdshajh111");        
        Upload.upload({
            url: '/api2/upload/avatar',
            method: 'POST',
            data: {
                'file': file,
              'idOfUser': userId
          }
        }).then(function (res) {
            console.log('Success ' +res);
        }, function (res) {
            console.log('Error status: ' + res);
        });
      console.log("upload progress",file)
    };

    this.tellServerPicHasChanged = function (userId) {  
        Upload.upload({
            url: '/api1/profiles/changeAvatar/'+userId,
            method: 'POST',
        });
        console.log("notifed");
    };

});
