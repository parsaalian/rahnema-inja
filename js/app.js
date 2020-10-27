var app = angular.module('app', ['ui.router', 'mm.foundation','plunker', 'ngAnimate','ngFileUpload' , 'ngTagsInput','ngDown'], function($httpProvider) {
    FastClick.attach(document.body);
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    delete $httpProvider.defaults.headers.common["Accept"] ;
});

app.controller('MainCtrl', function($scope, $http, $document, $modal, orderByFilter) {
    var url = 'http://50.116.42.77:3001';
    //iFrame for downloading
    var $iframe = angular.element('<iframe>').css('display', 'none');
    $document.find('body').append($iframe);

    var downloadFileFromUrl = function(downloadUrl) {
        $iframe.attr('src', '');
        $iframe.attr('src', downloadUrl);
    };

    $scope.showBuildModal = function() {
        var modalInstance = $modal.open({
            templateUrl: 'buildModal.html',
            controller: 'SelectModulesCtrl',
            resolve: {
                modules: function() {
                    return $http.get(url + '/api/bootstrap').then(function(response) {
                        return response.data.modules;
                    });
                }
            }
        });

        modalInstance.result.then(function(selectedModules) {
            var downloadUrl = url + '/api/bootstrap/download?';
            angular.forEach(selectedModules, function(module) {
                downloadUrl += "modules=" + module + "&";
            });
            downloadFileFromUrl(downloadUrl);
        });
    };

    $scope.showDownloadModal = function() {
        var modalInstance = $modal.open({
            templateUrl: 'downloadModal.html',
            controller: 'DownloadCtrl'
        });

        modalInstance.result.then(function(options) {
            var downloadUrl = ['http://pineconellc.github.io/angular-foundation/mm-foundation-'];
            if (options.tpls) {
                downloadUrl.push('tpls-');
            }
            downloadUrl.push(options.version);
            if (options.minified) {
                downloadUrl.push('.min');
            }
            downloadUrl.push('.js');

            downloadFileFromUrl(downloadUrl.join(''));
        });
    };


});

app.controller('SelectModulesCtrl', function($scope, $modalInstance, modules) {

    $scope.selectedModules = [];
    $scope.modules = modules;

    $scope.selectedChanged = function(module, selected) {
        if (selected) {
            $scope.selectedModules.push(module);
        } else {
            $scope.selectedModules.splice($scope.selectedModules.indexOf(module), 1);
        }
    };

    $scope.downloadBuild = function() {
        $modalInstance.close($scope.selectedModules);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});

app.controller('DownloadCtrl', function($scope, $modalInstance) {
    $scope.options = {
        minified: true,
        tpls: true
    };

    $scope.download = function(version) {
        $scope.options.version = version;
        $modalInstance.close($scope.options);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss();
    };
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("sign", {
        url: "/",
        component: "sign"
    });
    $stateProvider.state("forget", {
        url: "/forget",
        component: "forget"
    });
    $stateProvider.state("getCode", {
        url: "/getCode",
        component: "getCode"
    });
    $stateProvider.state("profile", {
        url: "/profile",
        component: "profile"
    });
    $stateProvider.state("home", {
        url: "/home",
        component: "homeAndActivities"
    });
    $stateProvider.state("searchResult", {
        url: "/searchResult/:searchPhrase",
        component: "search"
    });
    $stateProvider.state("post", {
        url: "/post/:postId",
        component: "onePost"
    });
    $stateProvider.state("setting", {
        url: "/setting",
        component: "setting"
    });
    $locationProvider.html5Mode(true);
});
  
app.config(function($httpProvider){
    $httpProvider.interceptors.push('httpRequestInterceptor');
})


 