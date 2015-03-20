(function() {
  'use strict';

  angular
    .module('attributes', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/attributes', {
          templateUrl: 'attributes/views/list.html',
          controller: 'attributesController as attributesCtl'
        })
        .when('/attributes/new', {
          templateUrl: 'attributes/views/create.html',
          controller: 'attributesController as attributesCtl'
        })
        .when('/attributes/:attributeId', {
          templateUrl: 'attributes/views/show.html',
          controller: 'attributesController as attributesCtl'
        })
        .when('/attributes/:attributeId/edit', {
          templateUrl: 'attributes/views/edit.html',
          controller: 'attributesController as attributesCtl'
        });
    });

})();
