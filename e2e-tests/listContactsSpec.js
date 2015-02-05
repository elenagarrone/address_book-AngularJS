describe('List of contacts', function(){

  beforeEach(function(){
    browser.get('index.html');
    contactList = element.all(by.tagName('tr'));
  })

  it('should appear when visiting the homepage', function(){
    expect(contactList.get(1).isPresent()).toBe(true);
  })

})
