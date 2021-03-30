import 'mocha';
import { expect } from 'chai';
import { Pound } from '../../src/ejercicio-2/pound';

describe('Pound methods tests', () => {
  const poundInstance = new Pound(20);
  it('poundInstance is expected to be correctly initialized', () => {
    expect(poundInstance.getValue()).to.equal(20);
  });
  it('poundInstance is expected to change when using setters', () => {
    poundInstance.setValue(40);
    expect(poundInstance.getValue()).to.equal(40);
  });
  it('poundInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(poundInstance.convert('grams')).to.
        equal(18160);
      expect(poundInstance.convert('kilograms')).to.
        equal(18.140589569160998);
    });
  it('poundInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(poundInstance.convert('gramscubed')).to.be.undefined;
      expect(poundInstance.convert('shrek')).to.be.undefined;
    });
});
