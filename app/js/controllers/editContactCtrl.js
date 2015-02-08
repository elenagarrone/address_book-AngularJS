addressBookApp.controller('editContactCtrl', ['$scope', '$http','$routeParams', '$location',
  function ($scope, $http, $routeParams, $location) {
    var currentId = $routeParams.id;

    $scope.editContact = function(contact){
      $http.put('http://fast-gorge.herokuapp.com/contacts/' + currentId, contact)
      .success(function(data){
        $location.path('/')
        alert('Contact edited succesfully')
      })
      .error(function(){
        alert('Something went wrong')
      })
    }

    $http.get('http://fast-gorge.herokuapp.com/contacts/' + currentId).success(function(data) {
      $scope.contact = data;
    });

  }
]);
