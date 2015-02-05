addressBookApp.controller('listContactsCtrl', ['$scope', '$http', '$route',
  function ($scope, $http, $route) {
    $http.get('http://fast-gorge.herokuapp.com/contacts').success(function(data){
      $scope.contacts = data;
    });

    $scope.orderAlphabetically = 'surname';

    $scope.deleteContact = function(id){
      $http.delete('http://fast-gorge.herokuapp.com/contacts/' + id).success(function(){
        $route.reload()
      });
    };
  }
]);
