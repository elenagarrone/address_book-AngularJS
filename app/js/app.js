var addressBookApp = angular.module('addressBookApp', ['ngRoute'])

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/list.html',
      controller: 'listContactsCtrl'
    });
}]);
