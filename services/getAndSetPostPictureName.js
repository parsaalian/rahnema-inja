angular.module("app").factory("getAndSetPostPictureName", function () {
  var picName=[];
    function set(name) {
      if(name=="delete"){
        picName=[];
      }
      else{
        picName.push(name.data);      
      }
    }
    function get() {
      return picName;
    }
    return {
      set: set,
      get: get
    }
  });