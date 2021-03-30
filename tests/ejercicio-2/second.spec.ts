import 'mocha';
import { expect } from 'chai';
import { Second } from '../../src/ejercicio-2/second';

describe('Second methods tests', () => {
  const secondInstance = new Second(20);
  it('secondInstance is expected to be correctly initialized', () => {
    expect(secondInstance.getValue()).to.equal(20);
  });
  it('secondInstance is expected to change when using setters', () => {
    secondInstance.setValue(120);
    expect(secondInstance.getValue()).to.equal(120);
  });
  it('secondInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(secondInstance.convert('minutes')).to.
        equal(2);
      expect(secondInstance.convert('hours')).to.
        equal(0.0033333333333333335);
    });
  it('secondInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(secondInstance.convert('yard')).to.be.undefined;
      expect(secondInstance.convert('shrek')).to.be.undefined;
    });
});
