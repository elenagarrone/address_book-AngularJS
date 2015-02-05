describe('newContact controller', function(){

  beforeEach(module('addressBookApp'));

  var scope, ctrl, $httpBackend;

  var contact = [
    {
      "first_name": "ZZZZ",
      "surname": "ZZZ",
      "address": "Z Street",
      "phone_number": "01222312",
      "email": "Z@Z.com"
    }
  ]

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('http://fast-gorge.herokuapp.com/contacts', contact).
    respond(200, 'Done');
    scope = $rootScope.$new();
    ctrl = $controller('newContactCtrl', {$scope: scope});
  }));

  it('should be able to add a contact', function(){
    scope.contact = contact;
    scope.addNewContact(contact);
    expect(scope.addNewContact).toBeTruthy();
  });

})
