describe('listContactsCtrl', function(){

  beforeEach(module('addressBookApp'));

  var scope, ctrl;

  var contacts = [
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
      "surname": "Aostra",
      "address": "No Street",
      "phone_number": "01222312",
      "email": "no@no.com",
      "id": 2511,
      "createdAt": "2015-01-15T15:23:27.000Z",
      "updatedAt": "2015-01-15T15:23:27.000Z"
    }
  ]

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('listContactsCtrl', { $scope:scope });
  }));

  it('should initialize with a list of contacts', function(){
    expect(scope.contacts).toEqual(contacts);
  });

  it('should set the default alphabetical order on the surname', function(){
    expect(orderAlphabetically).toBe('surname');
  });

  it('')

})
