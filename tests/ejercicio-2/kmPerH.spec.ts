import 'mocha';
import { expect } from 'chai';
import { KmPerH } from '../../src/ejercicio-2/kmPerH';

describe('meterPerSecond methods tests', () => {
  const kmperhInstance = new KmPerH(100);
  it('kmperhInstance is expected to be correctly initialized', () => {
    expect(kmperhInstance.getValue()).to.equal(100);
  });
  it('kmperhInstance is expected to change when using setters', () => {
    kmperhInstance.setValue(120);
    expect(kmperhInstance.getValue()).to.equal(120);
  });
  it('kmperhInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(kmperhInstance.convert('mpers')).to.
        equal(33.3333);
      expect(kmperhInstance.convert('milespers')).to.
        equal(0.0207124);
    });
  it('kmperhInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(kmperhInstance.convert('milespersecond')).to.be.undefined;
      expect(kmperhInstance.convert('shrek')).to.be.undefined;
    });
});
