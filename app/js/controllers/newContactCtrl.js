addressBookApp.controller('newContactCtrl', ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $scope.addNewContact = function(contact){
      $http.post('http://fast-gorge.herokuapp.com/contacts', contact)
      .success(function(){
        $location.path('/')
      })
    }
  }
]);
