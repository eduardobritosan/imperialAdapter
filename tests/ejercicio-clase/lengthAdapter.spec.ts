import 'mocha';
import { expect } from 'chai';
import { LengthAdapter } from '../../src/ejercicio-clase/lengthAdapter';
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
        equal(1524);
    });
  it('adapterLength is expected to be correctly convert yards to metric',
    () => {
      adapterLength.getImperial().setYard(50);
      expect(adapterLength.getMeter().toFixed(2)).to.
        equal('45.72');
      expect(adapterLength.getKilometer().toFixed(4)).to.
        equal('0.0457');
      expect(adapterLength.getCentimeter()).to.
        equal(4572);
    });
  it('adapterLength is expected to be correctly convert miles to metric',
    () => {
      adapterLength.getImperial().setMiles(50);
      expect(adapterLength.getMeter().toFixed(0)).to.
        equal('80467');
      expect(adapterLength.getKilometer().toFixed(2)).to.
        equal('80.47');
      expect(adapterLength.getCentimeter()).to.
        equal(8046720);
    });
  it('adapterLength is expected to be correctly convert nautic miles to metric',
    () => {
      adapterLength.getImperial().setNauticalMiles(50);
      expect(adapterLength.getMeter().toFixed(2)).to.
        equal('92599.70');
      expect(adapterLength.getKilometer().toFixed(1)).to.
        equal('92.6');
      expect(adapterLength.getCentimeter()).to.
        equal(9259951);
    });
});
