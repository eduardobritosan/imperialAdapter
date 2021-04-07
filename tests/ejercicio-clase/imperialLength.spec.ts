import 'mocha';
import { expect } from 'chai';
import { ImperialLength } from '../../src/ejercicio-clase/imperialLength';

describe('ImperialLength methods tests', () => {
  const inchInstance = new ImperialLength(1);
  it('inchInstance is expected to be correctly initialized', () => {
    expect(inchInstance.getValue()).to.equal(1);
  });
  it('inchInstance is expected to change when using setters', () => {
    inchInstance.setValue(12);
    expect(inchInstance.getFoot()).to.equal(1);
  });
  it('inchInstance is expected to be correctly converted', () => {
    expect(inchInstance.getYards().toFixed(2)).to.
      equal('0.33');
    expect(inchInstance.getMiles().toFixed(5)).to.
      equal('0.00019');
    expect(inchInstance.getNauticalMiles().toFixed(5)).to.
      equal('0.00016');
  });
});
