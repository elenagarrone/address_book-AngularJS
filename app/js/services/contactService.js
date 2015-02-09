addressBookApp.factory('contactService', ['$http', function($http) {

  var apiBase = 'http://fast-gorge.herokuapp.com/contacts';
  var contactService = {};

  dataFactory.getContacts = function () {
    return $http.get(apiBase);
  };

  dataFactory.getContact = function (currentId) {
    return $http.get(apiBase + '/' + currentId);
  };

  dataFactory.addContact = function (contact) {
    return $http.post(apiBase, contact);
  };

  dataFactory.editContact = function (contact) {
    return $http.put(apiBase + '/' + currentId, contact)
  };

  dataFactory.deleteCustomer = function (id) {
    return $http.delete(apiBase + '/' + id);
  };

  return contactService;
}]);
