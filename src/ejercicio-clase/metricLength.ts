export class MetricLength {
  constructor(private valueInMilimeters: number) { }
  public getValue(): number {
    return this.valueInMilimeters;
  }

  public setValue(valueInMilimeters: number): void {
    this.valueInMilimeters = valueInMilimeters;
  }
  /**
   * Returns the value as centimeter
   * @returns Value as centimeter
   */
  public getCentimeter() {
    return this.getValue() / 10;
  }

  /**
   * Reads centimeter and saves it in value
   * @param value the value in centimeter
   */
  public setCentimeter(value: number) {
    this.setValue(value * 10);
  }

  /**
   * Returns the object's value as meter
   * @returns value as meter
   */
  public getMeter() {
    return this.getValue() / 1000;
  }

  /**
   * Reads meter and saves it in value
   * @param value the value in meter
   */
  public setMeter(value: number) {
    this.setValue(value * 1000);
  }

  /**
 * Returns the object's value as kilometer
 * @returns value as kilometer
 */
  public getKilometer() {
    return this.getValue() / 1000000;
  }

  /**
   * Reads kilometer and saves it in value
   * @param value the value in kilometer
   */
  public setKilometers(value: number) {
    this.setValue(value * 0.000001);
  }
}
