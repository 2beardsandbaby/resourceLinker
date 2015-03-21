(function() {
  'use strict';

  angular
    .module('resources')
    .controller('resourcesController', ['resourcesService', '$location', '$routeParams', '$auth',
    '$scope',
      function(resourcesService, $location, $routeParams, $auth, $scope) {
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
