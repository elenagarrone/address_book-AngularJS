describe('Add a new contact page', function(){

  beforeEach(function(){
    browser.get('#/new');
  });

  it('should be presented with a form', function(){
    expect(element(by.tagName('h1')).getText()).toEqual('Add a new contact');
    expect(element(by.tagName('form')).isPresent()).toBe(true);
  });

  it('should be able to add a contact by filling up the form', function(){
    element(by.id('exampleInputSurname1')).sendKeys('Zzzz')
    element(by.id('exampleInputName1')).sendKeys('Zzzz')
    element(by.className('submit_newContact')).click()
    element.all(by.repeater('contact in contacts')).then(function(rows) {
      var lastRow = rows[rows.length -1]
      expect(lastRow.getText()).toMatch('ZZZZ ZZZZ');
    })
  });

})
