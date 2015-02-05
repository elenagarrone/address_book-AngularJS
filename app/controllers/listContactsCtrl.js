addressBookApp.controller('listContactsCtrl', function($scope){
  $scope.contacts = [
    {
      "first_name": "David",
      "surname": "Ginola",
      "address": "Any perrro street",
      "phone_number": "1981098312",
      "email": "ginola@david.com",
      "id": 2451,
      "createdAt": "2015-01-15T14:51:49.000Z",
      "updatedAt": "2015-02-03T17:03:09.000Z"
    },
    {
      "first_name": "Nadia",
      "surname": "Nostra",
      "address": "No Street",
      "phone_number": "01222312",
      "email": "no@no.com",
      "id": 2511,
      "createdAt": "2015-01-15T15:23:27.000Z",
      "updatedAt": "2015-01-15T15:23:27.000Z"
    }
  ]
})
