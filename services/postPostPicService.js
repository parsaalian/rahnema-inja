angular.module("app").service('uploadPostPicService',function($http,Upload,getAndSetPostPictureName) {
    
    this.uploadPostPic = function (file,userId) {   
        Upload.upload({
            url: '/api2/upload/postimage',
            method: 'POST',
            data: {
                'file': file,
                'idOfUser': userId
          }
        }).then(function (res) {
            console.log('Success ' +res);
            document.getElementById("checkInBtn").disabled=false;
            if(res != "Image Uploading Failed. Please Try Again."){           
                getAndSetPostPictureName.set(res);
            }
        });
    };

});
