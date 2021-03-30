import 'mocha';
import { expect } from 'chai';
import { Km } from '../../src/ejercicio-2/km';

describe('Km methods tests', () => {
  const kmInstance = new Km(20);
  it('kmInstance is expected to be correctly initialized', () => {
    expect(kmInstance.getValue()).to.equal(20);
  });
  it('kmInstance is expected to change when using setters', () => {
    kmInstance.setValue(100);
    expect(kmInstance.getValue()).to.equal(100);
  });
  it('kmInstance is expected to be correctly converted when passed' +
    ' the correct strings', () => {
      expect(kmInstance.convert('mile')).to.
        equal(62.15040397762586);
      expect(kmInstance.convert('meters')).to.
        equal(100000);
    });
  it('kmInstance is expected to be return undefined when passed' +
    ' incorrect strings', () => {
      expect(kmInstance.convert('yard')).to.be.undefined;
      expect(kmInstance.convert('shrek')).to.be.undefined;
    });
});
