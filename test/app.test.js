const assert = require('chai').assert;
const app = require('../app');
console.clear();

describe('--- Application Test ---', () => {
  let testCounter = 0;

  before(() => console.log('Loading Tests...'));
  beforeEach(() => {
    testCounter++;
    console.log(`# Test ${testCounter} #`);
  });

  afterEach(() => console.log(`\n`));
  after(() => {
    console.log(`\n### Done, ${testCounter} tests was loaded`);
  });


  it('app should return hello', () => {
    assert.equal(app(), 'hello');
  });

  it('port is 3000', () => {
    assert.equal(app.PORT, 3000);
  });
});