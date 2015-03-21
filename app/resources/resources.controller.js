(function() {
  'use strict';

  angular
    .module('resources')
    .controller('resourcesController', [
      'attributesService',
      'resourcesService',
      '$location',
      '$routeParams',
      '$auth',
      function(
        attributesService,
        resourcesService,
        $location,
        $routeParams,
        $auth
      ) {
        var resourcesCtl = this;
        resourcesCtl.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };
        resourcesService.getResources().success(function(resources) {
          resourcesCtl.resources = resources;
        });

        resourcesCtl.attributes = [];
        attributesService.getAttributes().success(function(attributes) {
          resourcesCtl.attributes = attributes;
        });

        resourcesService.getResource($routeParams.resourceId).success(function(resource) {
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
