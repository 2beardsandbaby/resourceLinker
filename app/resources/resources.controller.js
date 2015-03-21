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
      '$scope',
      function(
        attributesService,
        resourcesService,
        $location,
        $routeParams,
        $auth,
        $scope
      ) {
        var resourcesCtl = this;
        resourcesCtl.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        $scope.preview = {};

        resourcesCtl.getPreview = function (link) {
          resourcesService.getPreview(link).then(function (data) {
            console.log(data);
            $scope.preview = data.data;
          });
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
          newResource.title = $scope.preview.title;
          newResource.photo = $scope.preview.photo;
          newResource.description = $scope.preview.description;
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
