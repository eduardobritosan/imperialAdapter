import { ImperialLength } from './imperialLength';
import { MetricLength } from './metricLength';

export class LengthAdapter extends MetricLength {
  constructor(private service: ImperialLength) {
    super(service.getValue() * 25.4);
  }

  /**
   * Returns the imperialLength object
   * @returns the imperialLength object passed when instancing the class
   */
  public getImperial() {
    return this.service;
  }
  /**
   * Converts from imperial to metric in milimeters
   * @returns the value in milimeters
   */
  public getMilimeters() {
    return this.getImperial().getValue() * 25.4;
  }

  /**
   * Converts from imperial to metric in meters
   * @returns the value in meters
   */
  public getMeter() {
    return this.getImperial().getValue() / 39.37;
  }

  /**
   * Converts from imperial to metric in centimeters
   * @returns the value in centimeters
   */
  public getCentimeter() {
    return this.getImperial().getValue() * 2.54;
  }

  /**
   * Converts from imperial to metric in kilometers
   * @returns the value in kilometers
   */
  public getKilometer() {
    return this.getImperial().getValue() / 39370;
  }
}
