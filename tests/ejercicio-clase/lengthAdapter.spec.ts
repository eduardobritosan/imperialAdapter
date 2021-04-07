import 'mocha';
import { expect } from 'chai';
import { LengthAdapter } from '../../src/ejercicio-clase/LengthAdapter';
import { ImperialLength } from '../../src/ejercicio-clase/imperialLength';

describe('LengthAdapter methods tests', () => {
  // const metricLength = new MetricLength(10);
  const imperialLength = new ImperialLength(10);
  imperialLength.setFoot(50);
  const adapterLength = new LengthAdapter(imperialLength);

  it('adapterLength is expected to be correctly convert foot to metric',
    () => {
      expect(adapterLength.getMeter().toFixed(2)).to.
        equal('15.24');
      expect(adapterLength.getKilometer().toFixed(5)).to.
        equal('0.01524');
      expect(adapterLength.getCentimeter()).to.
        equal('1524');
    });
  it('adapterLength is expected to be correctly convert yards to metric',
    () => {
      adapterLength.getImperial().setYard(50);
      expect(adapterLength.getMeter().toFixed(2)).to.
        equal('45.72');
      expect(adapterLength.getKilometer().toFixed(4)).to.
        equal('0.0457');
      expect(adapterLength.getCentimeter()).to.
        equal('4572');
    });
  it('adapterLength is expected to be correctly convert miles to metric',
    () => {
      adapterLength.getImperial().setMiles(50);
      expect(adapterLength.getMeter().toFixed(0)).to.
        equal('80450');
      expect(adapterLength.getKilometer().toFixed(2)).to.
        equal('80.45');
      expect(adapterLength.getCentimeter()).to.
        equal(8046700);
    });
  it('adapterLength is expected to be correctly convert nautic miles to metric',
    () => {
      adapterLength.getImperial().setNauticalMiles(50);
      expect(adapterLength.getMeter()).to.
        equal(92600);
      expect(adapterLength.getKilometer().toFixed(2)).to.
        equal(92.6);
      expect(adapterLength.getCentimeter()).to.
        equal(9260000);
    });
});
