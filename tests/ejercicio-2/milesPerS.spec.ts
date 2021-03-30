import 'mocha';
import { expect } from 'chai';
import { MilesPerS } from '../../src/ejercicio-2/milesPerS';

describe('Miles per second methods tests', () => {
  const milesPerHInstance = new MilesPerS(1);
  it('milesPerHInstance is expected to be correctly initialized', () => {
    expect(milesPerHInstance.getValue()).to.equal(1);
  });
  it('milesPerHInstance is expected to change when using setters', () => {
    milesPerHInstance.setValue(2);
    expect(milesPerHInstance.getValue()).to.equal(2);
  });
  it('milesPerHInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(milesPerHInstance.convert('mpers')).to.
        equal(3218);
      expect(milesPerHInstance.convert('KMPERH')).to.
        equal(11588);
    });
  it('milesPerHInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(milesPerHInstance.convert('milespersecond')).to.be.undefined;
      expect(milesPerHInstance.convert('shrek')).to.be.undefined;
    });
});
