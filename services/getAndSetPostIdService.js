angular.module("app").factory("getAndSetPostIdService", function () {
  function set(id) {
    postId = id;
  }
  function get() {
    return postId;
  }

  return {
    set: set,
    get: get
  }

});