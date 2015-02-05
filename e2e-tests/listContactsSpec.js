describe('The homepage', function(){

  beforeEach(function(){
    browser.get('index.html');
    contactList = element.all(by.tagName('tr'));
  })

  it('should have a list of contacts', function(){
    expect(contactList.get(1).isPresent()).toBe(true);
    expect(contactList.get(2).isPresent()).toBe(true);
  })

  it('should have a search field', function(){
    expect(element(by.className('searchField')).isPresent()).toBe(true);
  })

  it('a user should be able to search for a contact', function(){
    element(by.className('searchField')).sendKeys('nadia')
    expect(contactList.get(1).getText()).toEqual('NOSTRA NADIA No Street no@no.com 01222312')
  })

})
