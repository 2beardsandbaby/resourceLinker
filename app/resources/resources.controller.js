(function() {
  'use strict';

  angular
    .module('resources')
    .controller('resourcesController', ['resourcesService', '$location', '$routeParams', '$auth',
      function(resourcesService, $location, $routeParams, $auth) {
        var resourcesCtl = this;
        resourcesCtl.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };
        resourcesService.getResources().success(function(resources) {
          resourcesCtl.resources = resources;
        });

        resourcesService.getResource($routeParams.postId).success(function(resource) {
          resourcesCtl.resource = resource;
        });

        resourcesCtl.createResource = function(newResource) {
          resourcesService.createResource(newResource);
          $location.path('/resources');
        };

        resourcesCtl.editResource = function(resource) {
          resourcesService.editResource(resource);
          $location.path('/resources');
        };

        resourcesCtl.deleteResource = function(id) {
          resourcesService.deleteResource(id);
          $location.path('/resources');
        };


      }
    ]);
})();
