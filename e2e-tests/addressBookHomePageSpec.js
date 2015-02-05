describe('The homepage', function(){

  beforeEach(function(){
    browser.get('index.html');
    contactList = element.all(by.tagName('tr'));
  });

  it('should have a list of contacts', function(){
    expect(contactList.get(1).isPresent()).toBe(true);
    expect(contactList.get(2).isPresent()).toBe(true);
  });

  it('should have a search field', function(){
    expect(element(by.className('searchField')).isPresent()).toBe(true);
  });

  it('a user should be able to search for a contact', function(){
    element(by.className('searchField')).sendKeys('nadia')
    expect(contactList.get(1).getText()).toEqual('NOSTRA NADIA No Street no@no.com 01222312')
  });

  it('should be presented with the list of contacts ordered alphabetically by surname', function(){
    expect(contactList.get(1).getText()).toEqual('ARTISTE ALANARAY 123 world and a half alan@art.com 03838 118101')
    expect(contactList.get(2).getText()).toEqual('BRUNDY SOLOMON 110 kray road solo@brundy.com 87311337801')
  });

  it('a user should be able to list the contacts alphabetically by name', function(){
    element(by.model('orderAlphabetically')).element(by.css('option[value="first_name"]')).click();
    expect(contactList.get(2).getText()).toEqual('GINOLA DAVID Any perrro street ginola@david.com 1981098312')
    expect(contactList.get(3).getText()).toEqual('FOLLY FREDDY 273 england fred@folly.com 938289239181')
  });

  it('should have a button to add a new contact', function(){
    expect(element(by.className('addContact')).isPresent()).toBe(true);
    expect(element(by.className('addContact')).getText()).toEqual('Add a new contact');
  });

  it('by clicking on the "add contact" i should be redirected to another page', function(){
    element(by.className('addContact')).click();
    expect(browser.getCurrentUrl()).toEqual('/new')
  });

})
