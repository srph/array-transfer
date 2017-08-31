const transfer = require('./');
const {expect} = require('chai');

describe('array transfer', () => {
  it('should move item', () => {
    const {source, destination} = transfer(['rupee', 'doggie'], ['macky'], 1, 0);
    expect(source).to.eql(['rupee'])
    expect(destination).to.eql(['doggie', 'macky'])
  })
})