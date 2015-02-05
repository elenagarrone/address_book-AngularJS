addressBookApp.controller('listContactsCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data) {
      $scope.contacts = data;
    });

    $scope.orderAlphabetically = 'surname';
}]);
