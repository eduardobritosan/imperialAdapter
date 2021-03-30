import 'mocha';
import { expect } from 'chai';
import { Mile } from '../../src/ejercicio-2/mile';

describe('Mile methods tests', () => {
  const mileInstance = new Mile(20);
  it('mileInstance is expected to be correctly initialized', () => {
    expect(mileInstance.getValue()).to.equal(20);
  });
  it('mileInstance is expected to change when using setters', () => {
    mileInstance.setValue(100);
    expect(mileInstance.getValue()).to.equal(100);
  });
  it('mileInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(mileInstance.convert('kilometers')).to.
        equal(160.9);
      expect(mileInstance.convert('meters')).to.
        equal(160900);
    });
  it('mileInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(mileInstance.convert('yard')).to.be.undefined;
      expect(mileInstance.convert('shrek')).to.be.undefined;
    });
});
