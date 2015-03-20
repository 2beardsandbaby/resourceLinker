(function() {
  'use strict';

  angular
    .module('resources', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      var checkAuth = function($q, $location, $auth) {
        var dfd = $q.defer();
        if (!$auth.isAuthenticated()) {
          $location.path('/login');
        } else {
          dfd.resolve();
        }
        return dfd.promise;
      };
      $routeProvider
        .when('/resources', {
          templateUrl: 'resources/views/list.html',
          controller: 'resourcesController as resourcesCtl'
        })
        .when('/resources/new', {
          templateUrl: 'resources/views/create.html',
          controller: 'resourcesController as resourcesCtl'

        })
        .when('/resources/:resourceId', {
          templateUrl: 'resources/views/show.html',
          controller: 'resourcesController as resourcesCtl'
        })
        .when('/resources/:resourceId/edit', {
          templateUrl: 'resources/views/edit.html',
          controller: 'resourcesController as resourcesCtl'
        });
    });

})();
