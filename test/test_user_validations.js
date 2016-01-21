var chai = require('chai');
var assert = require('assert');
var should = chai.should();
var validate = require('../lib/validations');

describe('User Input Validations', function() {
  it('work', function (done) {
    validate.should.be.a('object');
    done();
    });
  });
