(function() {
  'use strict';

  angular
    .module('attributes')
    .factory('attributesService', ['$http', '$rootScope', function($http, $rootScope) {

      // public service methods
      return {
        getAttributes: getAttributes,
        getAttribute: getAttribute,
        createAttribute: createAttribute,
        editAttribute: editAttribute,
        deleteAttribute: deleteAttribute
      };

      function getAttributes() {
        return $http.get('api/collections/attributes');
      }

      function getAttribute(attributeId) {
        return $http.get('api/collections/attributes/' + attributeId);
      }

      function createAttribute(newAttribute) {
        $http.post('api/collections/attributes', newAttribute).then(function(res) {
          $rootScope.$broadcast('attribute:added');
        });
      }

      function editAttribute(attribute) {
        $http.put('api/collections/attributes/' + attribute._id, attribute).then(function(res) {
          $rootScope.$broadcast('attribute:updated');
        });

      }

      function deleteAttribute(attributeId) {
        $http.delete('api/collections/attributes/' + attributeId).then(function(res) {
          $rootScope.$broadcast('attribute:deleted');
        });
      }



    }]);
})();
