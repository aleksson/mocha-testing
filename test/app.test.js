const assert = require('chai').assert;
const app = require('../app');
console.clear();

describe('Mocha Application Testsuite', () => {
  
  let done = false, testCounter = 0;

  before(() => console.log('Loading Tests...'));
  beforeEach(() => {
    testCounter++;
    console.log(`### Test ${testCounter} ###`);
  });

  afterEach(() => console.log(`\n`));
  after(() => {
    done = true;
    console.log(`### Done [${testCounter} tasks] ###`);
  });

  it('app should return "mocha-testing"', () => {
    assert.equal(app(), 'mocha-testing');
  });

  it('app developer is "you"', () => {
    assert.equal(app.DEVELOPER, 'aleksson');
  });

  it('port is 1337', () => {
    assert.equal(app.PORT, 1337);
  });

});