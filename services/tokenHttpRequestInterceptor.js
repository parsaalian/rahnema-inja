app.factory('httpRequestInterceptor', function (getAndSetTokenService) {
    return {
      request: function (config) {
        config.headers['Authorization'] = getAndSetTokenService.get();
        return config;
      }
    };
  });
  