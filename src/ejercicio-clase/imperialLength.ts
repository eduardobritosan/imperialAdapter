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
   * Returns the object's value as yards
   * @returns value as yards
   */
  public getYards() {
    return this.getValue() / 36;
  }

  /**
 * Returns the object's value as miles
 * @returns value as miles
 */
  public getMiles() {
    return this.getValue() / 63360;
  }

  /**
   * Returns the object's value as nautical miles
   * @returns value as nautical miles
   */
  public getNauticalMiles() {
    return this.getValue() / 72913;
  }
}
