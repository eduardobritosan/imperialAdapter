import 'mocha';
import { expect } from 'chai';
import { MPerS } from '../../src/ejercicio-2/mPerS';

describe('meterPerSecond methods tests', () => {
  const mpersInstance = new MPerS(4000);
  it('mpersInstance is expected to be correctly initialized', () => {
    expect(mpersInstance.getValue()).to.equal(4000);
  });
  it('mpersInstance is expected to change when using setters', () => {
    mpersInstance.setValue(3000);
    expect(mpersInstance.getValue()).to.equal(3000);
  });
  it('mpersInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(mpersInstance.convert('milespers')).to.
        equal(1.864512119328775637041640770665);
      expect(mpersInstance.convert('KMperH')).to.
        equal(10800);
    });
  it('mpersInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(mpersInstance.convert('milespersecond')).to.be.undefined;
      expect(mpersInstance.convert('KMperHour')).to.be.undefined;
    });
});
