(function() {
  'use strict';

  angular
  .module('attributes')
    .controller('attributesController', ['attributesService', '$location', '$routeParams', '$auth',
        function(attributesService, $location, $routeParams, $auth) {

        var attributesCtl = this;
        attributesCtl.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };
        attributesService.getAttributes().success(function(attributes) {
          attributesCtl.attributes = attributes;
        });

        attributesService.getAttribute($routeParams.attributeId).success(function(attribute) {
          attributesCtl.attribute = attribute;
        });

        attributesCtl.createAttribute = function(newAttribute) {
          attributesService.createAttribute(newAttribute);
          $location.path('/attributes');
        };

        attributesCtl.editAttribute = function(attribute) {
          attributesService.editAttribute(attribute);
          $location.path('/attributes');
        };

        attributesCtl.deleteAttribute = function(id) {
          attributesService.deleteAttribute(id);
          $location.path('/attributes');
        };
    }
  ]);
})();
