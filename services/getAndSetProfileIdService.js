angular.module("app").service("getAndSetProfileIdService", function ($state) {
    function set(id) {
      profileUserId = id;
      $state.go('profile', {}, { reload: 'profile' });
    }
    function get() {
      return profileUserId;
    }
  
    return {
      set: set,
      get: get
    }
  
  });