import 'mocha';
import { expect } from 'chai';
import { Meter } from '../../src/ejercicio-2/meter';

describe('Meter methods tests', () => {
  const meterInstance = new Meter(20);
  it('meterInstance is expected to be correctly initialized', () => {
    expect(meterInstance.getValue()).to.equal(20);
  });
  it('meterInstance is expected to change when using setters', () => {
    meterInstance.setValue(900);
    expect(meterInstance.getValue()).to.equal(900);
  });
  it('meterInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(meterInstance.convert('kilometers')).to.
        equal(0.9);
      expect(meterInstance.convert('miles')).to.
        equal(0.5593536357986327);
    });
  it('meterInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(meterInstance.convert('yard')).to.be.undefined;
      expect(meterInstance.convert('shrek')).to.be.undefined;
    });
});
