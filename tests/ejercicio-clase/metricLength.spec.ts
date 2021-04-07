import 'mocha';
import { expect } from 'chai';
import { MetricLength } from '../../src/ejercicio-clase/metricLength';

describe('MetricLength methods tests', () => {
  const milimeterInstance = new MetricLength(1);
  it('milimeterInstance is expected to be correctly initialized', () => {
    expect(milimeterInstance.getValue()).to.equal(1);
  });
  it('milimeterInstance is expected to change when using setters', () => {
    milimeterInstance.setValue(10);
    expect(milimeterInstance.getCentimeter()).to.equal(1);
  });
  it('milimeterInstance is expected to be correctly converted', () => {
    expect(milimeterInstance.getMeter().toFixed(2)).to.
      equal('0.01');
    expect(milimeterInstance.getKilometer().toFixed(5)).to.
      equal('0.00001');
  });
});
