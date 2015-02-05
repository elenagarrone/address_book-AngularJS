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
    expect(contactList.get(1).getText()).toEqual('AOSTRA NADIA No Street no@no.com 01222312')
  });

  it('should be presented with the list of contacts ordered alphabetically by surname', function(){
    expect(contactList.get(1).getText()).toEqual('AOSTRA NADIA No Street no@no.com 01222312')
    expect(contactList.get(2).getText()).toEqual('GINOLA DAVID Any perrro street ginola@david.com 1981098312')
  });

  it('a user should be able to list the contacts alphabetically by name', function(){
    element(by.model('orderAlphabetically')).element(by.css('option[value="first_name"]')).click();
    expect(contactList.get(1).getText()).toEqual('GINOLA DAVID Any perrro street ginola@david.com 1981098312')
    expect(contactList.get(2).getText()).toEqual('AOSTRA NADIA No Street no@no.com 01222312')
  });

})
