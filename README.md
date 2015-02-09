Address Book in AngularJS
=========================
This is version 2.0 of a simple single page address book application built using AngularJS. You can find version 1.0 <a href='https://github.com/elenagarrone/address_book-exercises'>here</a>.
Please keep in mind that it's still a <strong>work in progress</strong>.

Specification:
--------------
Contacts:
- are listed in alphabetical order
- can be added, edited and removed
- have a name(required), surname(required), address, phone number, email
- can be searched using a search field

Technologies:
-------------
- AngularJS
- HTML
- CSS
- API
- Karma
- Protractor

How to use:
-----------
Clone the repo:
```shell
$ git clone https://github.com/elenagarrone/address_book-AngularJS
```
Change into the directory:
```shell
$ cd address_book-AngularJS
```
Install dependencies:
```shell
$ npm install
$ bower install
```
Try it on localhost:
```shell
$ npm start
#then on the browser go to:
localhost:8000/app
```

How to test:
------------
Make sur you are running the server (npm start) and then:
```shell
$ npm test #to run unit tests (currently not working)
$ npm run protractor #for e2e tests
```
