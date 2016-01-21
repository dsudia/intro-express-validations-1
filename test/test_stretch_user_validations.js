var chai = require('chai');
var assert = require('assert');
var should = chai.should();
var validate = require('../lib/validations');

describe('User Validations', function () {
  describe('Name is Valid', function() {
    xit('Name cannot be blank', function (done) {
      validate.nameIsNotBlank.should.be.a('function');
      assert.equal(validate.nameIsNotBlank('   '), 'Name cannot be blank');
      assert.equal(validate.nameIsNotBlank('George Orwell'), true);
      done();
    });
  });
  describe('Email is Valid', function () {
    xit('should not be blank', function (done) {
      validate.emailIsNotBlank.should.be.a('function');
      assert.equal(validate.emailIsNotBlank('    '), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('me@me.com'), true)
      done();
    });
    xit('should not be just @ symbol', function (done) {
      assert.equal(validate.emailIsNotBlank('@'), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('me@me.it'), true)
      done();
    });
    xit('should have text before @ symbol', function (done) {
      assert.equal(validate.emailIsNotBlank('@i.com'), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('you@i.it'), true)
      done();
    });
    xit('should have valid text after @ symbol', function (done) {
      assert.equal(validate.emailIsNotBlank('hello@'), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('@i.c'), 'Email is invalid')
      assert.equal(validate.emailIsNotBlank('me@me.com'), true)
      done();
    });
    describe('Phone Number is Valid', function () {
      xit('should not be blank', function (done) {
        validate.phoneNumberIsValid.should.be.a('function');
        assert.equal(validate.phoneNumberIsValid('  '), 'Phone number is invalid');
        done();
      });
      xit('should have enough digits', function (done) {
        validate.phoneNumberIsValid.should.be.a('function');
        assert.equal(validate.phoneNumberIsValid('123555234'), 'Phone number is invalid');
        assert.equal(validate.phoneNumberIsValid('1235552345'), true);
        done();
      });
      xit('should accept dashes in input', function (done) {
        validate.phoneNumberIsValid.should.be.a('function');
        assert.equal(validate.phoneNumberIsValid('123-555-2345'), true);
        done();
      });
    });
  });
});
