export class ImperialLength {
  constructor(private valueInInches: number) { }
  public getValue(): number {
    return this.valueInInches;
  }

  public setValue(valueInInches: number): void {
    this.valueInInches = valueInInches;
  }

  public getFoot() {
    return this.getValue() / 12;
  }

  public getYards() {
    return this.getValue() / 36;
  }

  public getMiles() {
    return this.getValue() / 63360;
  }

  public getNauticalMiles() {
    return this.getValue() / 72913;
  }
}
