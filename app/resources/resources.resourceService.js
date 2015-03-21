(function() {
  'use strict';

  angular
    .module('resources')
    .factory('resourcesService', ['$http', '$rootScope', function($http, $rootScope) {

      // public service methods
      return {
        getResources: getResources,
        getResource: getResource,
        createResource: createResource,
        editResource: editResource,
        deleteResource: deleteResource,
        getPreview: getPreview
      };

      function getPreview(linkObj) {
        return $http.post('/preview/linkPreview', linkObj).then(function (response) {
          return response;
        });
      }

      function getResources() {

        return $http.get('api/collections/resources');
      }

      function getResource(resourceId) {
        return $http.get('api/collections/resources/' + resourceId);
      }

      function createResource(newResource) {
        $http.post('api/collections/resources', newResource).then(function(res) {
          $rootScope.$broadcast('resource:added');
        });
      }

      function editResource(resource) {
        $http.put('api/collections/resources/' + resource._id, resource).then(function(res) {
          $rootScope.$broadcast('resource:updated');
        });

      }

      function deleteResource(resourceId) {
        $http.delete('api/collections/resources/' + resourceId).then(function(res) {
          $rootScope.$broadcast('resource:deleted');
        });
      }



    }]);
})();
