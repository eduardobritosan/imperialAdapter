import 'mocha';
import { expect } from 'chai';
import { Gram } from '../../src/ejercicio-2/gram';

describe('Gram methods tests', () => {
  const gInstance = new Gram(20);
  it('gInstance is expected to be correctly initialized', () => {
    expect(gInstance.getValue()).to.equal(20);
  });
  it('gInstance is expected to change when using setters', () => {
    gInstance.setValue(900);
    expect(gInstance.getValue()).to.equal(900);
  });
  it('gInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(gInstance.convert('kilograms')).to.
        equal(0.9);
      expect(gInstance.convert('pounds')).to.
        equal(1.9823788546255507);
    });
  it('gInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(gInstance.convert('gramscubed')).to.be.undefined;
      expect(gInstance.convert('shrek')).to.be.undefined;
    });
});
