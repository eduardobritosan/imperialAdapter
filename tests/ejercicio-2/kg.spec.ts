import 'mocha';
import { expect } from 'chai';
import { Kg } from '../../src/ejercicio-2/kg';

describe('Kilogram methods tests', () => {
  const kgInstance = new Kg(20);
  it('kgInstance is expected to be correctly initialized', () => {
    expect(kgInstance.getValue()).to.equal(20);
  });
  it('kgInstance is expected to change when using setters', () => {
    kgInstance.setValue(40);
    expect(kgInstance.getValue()).to.equal(40);
  });
  it('kgInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(kgInstance.convert('grams')).to.
        equal(40000);
      expect(kgInstance.convert('pounds')).to.
        equal(88.2);
    });
  it('kgInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(kgInstance.convert('gramscubed')).to.be.undefined;
      expect(kgInstance.convert('shrek')).to.be.undefined;
    });
});
