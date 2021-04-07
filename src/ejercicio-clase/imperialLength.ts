export class ImperialLength {
  constructor(private valueInInches: number) { }
  public getValue(): number {
    return this.valueInInches;
  }

  public setValue(valueInInches: number): void {
    this.valueInInches = valueInInches;
  }
  /**
   * Returns the value as foot
   * @returns Value as foot
   */
  public getFoot() {
    return this.getValue() / 12;
  }

  /**
   * Reads foot and saves it in value
   * @param value the value in feet
   */
  public setFoot(value: number) {
    this.setValue(this.getValue() * 12);
  }

  /**
   * Returns the object's value as yards
   * @returns value as yards
   */
  public getYards() {
    return this.getValue() / 36;
  }

  /**
   * Reads yards and saves it in value
   * @param value the value in yards
   */
  public setYard(value: number) {
    this.setValue(this.getValue() * 36);
  }

  /**
 * Returns the object's value as miles
 * @returns value as miles
 */
  public getMiles() {
    return this.getValue() / 63360;
  }

  /**
   * Reads miles and saves it in value
   * @param value the value in miles
   */
  public setMiles(value: number) {
    this.setValue(this.getValue() * 63360);
  }

  /**
   * Returns the object's value as nautical miles
   * @returns value as nautical miles
   */
  public getNauticalMiles() {
    return this.getValue() / 72913;
  }

  /**
   * Reads nautical miles and saves it in value
   * @param value the value in nautical miles
   */
  public setNauticalMiles(value: number) {
    this.setValue(this.getValue() * 72913);
  }
}
