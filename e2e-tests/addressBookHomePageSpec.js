describe('The address book', function(){

  beforeEach(function(){
    browser.get('index.html');
    contactList = element.all(by.tagName('tr'));
  });

  it('should have a list of contacts', function(){
    expect(contactList.get(1).isPresent()).toBe(true);
    expect(contactList.get(2).isPresent()).toBe(true);
  });

  it('should have a title', function(){
    expect(element(by.id('title')).isPresent()).toBe(true);
  });

  it('should have the link "AddressBook" redirecting to the homepage', function(){
    element(by.id('title')).click();
    expect(browser.getCurrentUrl()).toMatch('http://localhost:8000/app/index.html#/')
  });

  it('should have a search field', function(){
    expect(element(by.className('searchField')).isPresent()).toBe(true);
  });

  it('a user should be able to search for a contact', function(){
    element(by.className('searchField')).sendKeys('nadia')
    expect(contactList.get(1).getText()).toEqual('NOSTRA NADIA No Street no@no.com 01222312 Edit Delete')
  });

  it('should be presented with the list of contacts ordered alphabetically by surname', function(){
    expect(contactList.get(1).getText()).toEqual('ARTISTE ALANARAY 123 world and a half alan@art.com 03838 118101 Edit Delete')
    expect(contactList.get(2).getText()).toEqual('BRUNDY SOLOMON 110 kray road solo@brundy.com 87311337801 Edit Delete')
  });

  it('a user should be able to list the contacts alphabetically by name', function(){
    element(by.model('orderAlphabetically')).element(by.css('option[value="first_name"]')).click();
    expect(contactList.get(2).getText()).toEqual('GINOLA DAVID Any perrro street ginola@david.com 1981098312 Edit Delete')
    expect(contactList.get(3).getText()).toEqual('FOLLY FREDDY 273 england fred@folly.com 938289239181 Edit Delete')
  });

  it('should have a button to add a new contact', function(){
    expect(element(by.className('addContact')).isPresent()).toBe(true);
    expect(element(by.className('addContact')).getText()).toEqual('Add a new contact');
  });

  it('by clicking on the "Add a new contact" i should be redirected to another page', function(){
    element(by.className('addContact')).click();
    expect(browser.getCurrentUrl()).toContain('/new')
  });

  it('after clicking to add a new contact I should be presented with a form', function(){
    element(by.className('addContact')).click();
    expect(element(by.tagName('h1')).getText()).toEqual('Add a new contact');
    expect(element(by.tagName('form')).isPresent()).toBe(true);
  });

  it('should be able to add a contact by filling up the form', function(){
    element(by.className('addContact')).click();
    element(by.id('exampleInputSurname1')).sendKeys('Zzzz')
    element(by.id('exampleInputName1')).sendKeys('Zzzz')
    element(by.className('submit_newContact')).click()
    element.all(by.repeater('contact in contacts')).then(function(rows) {
      var lastRow = rows[rows.length -1]
      expect(lastRow.getText()).toMatch('ZZZZ ZZZZ');
    })
  });

  it('should have an edit button available for each contact', function(){
    expect(element(by.className('editZzzzZzzz')).isPresent()).toBe(true);
  });

  it('should have the edit form prefilled', function(){
    element(by.className('editZzzzZzzz')).click()
    expect(element(by.id('exampleInputSurname1')).getAttribute('value')).toMatch('Zzzz')
    expect(element(by.id('exampleInputName1')).getAttribute('value')).toMatch('Zzzz')
  });

  it('should be able to edit a contact', function(){
    element(by.className('editZzzzZzzz')).click()
    element(by.id('exampleInputName1')).clear()
    element(by.id('exampleInputName1')).sendKeys('Aaaa')
    element(by.className('submit_editContact')).click()
    element.all(by.repeater('contact in contacts')).then(function(rows) {
      var lastRow = rows[rows.length -1]
      expect(lastRow.getText()).toMatch('ZZZZ AAAA Edit Delete');
    })
  });

  it('should have a delete button available for each contact', function(){
    expect(element(by.className('deleteZzzzAaaa')).isPresent()).toBe(true);
  });

  it('by clicking the delete button you remove the contact', function(){
    element(by.className('deleteZzzzAaaa')).click()
    element.all(by.repeater('contact in contacts')).then(function(rows) {
      var lastRow = rows[rows.length -1]
      expect(lastRow.getText()).not.toMatch('ZZZZ AAAA Edit Delete');
    })
  });

  it('the forms should check for presence of surname', function(){
    element(by.className('addContact')).click();
    expect(element(by.className('surnameRequired')).getText()).toEqual('You need to enter your surname')
    element(by.id('exampleInputSurname1')).sendKeys('Aaaa')
    expect(element(by.className('surnameRequired')).isPresent()).toBe(false)
  });

  it('the forms should check for presence of name', function(){
    element(by.className('addContact')).click();
    expect(element(by.className('nameRequired')).getText()).toEqual('You need to enter your name')
    element(by.id('exampleInputName1')).sendKeys('Aaaa')
    expect(element(by.className('nameRequired')).isPresent()).toBe(false)
  });

})
