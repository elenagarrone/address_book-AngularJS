addressBookApp.controller('listContactsCtrl', ['$scope', '$http', '$route', 'contactService',
  function ($scope, $http, $route, contactService) {
    contactService.getContacts.success(function(data){
      $scope.contacts = data;
    })

    $scope.orderAlphabetically = 'surname';

    $scope.deleteContact = function(id){
      $http.delete('http://fast-gorge.herokuapp.com/contacts/' + id)
      .success(function(){
        $route.reload();
        alert('Contact deleted succesfully')
      })
      .error(function(){
        alert('Something went wrong')
      })
    }
  }
]);
