import { ImperialLength } from './imperialLength';
import { MetricLength } from './metricLength';

export class LengthAdapter extends MetricLength {
  constructor(private service: ImperialLength) {
    super(service.getValue() * 25.4);
  }

  public getImperial() {
    return this.service;
  }
  public getMilimeters() {
    return this.getImperial().getValue() * 25.4;
  }

  public getMeter() {
    return this.getImperial().getValue() / 39.37;
  }

  public getCentimeter() {
    return this.getImperial().getValue() * 2.54;
  }

  public getKilometer() {
    return this.getImperial().getValue() / 39370;
  }
}
