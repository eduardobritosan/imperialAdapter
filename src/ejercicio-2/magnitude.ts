import { isConvertible } from './isConvertible';

/**
 * Abstract class from which all kinds of magnitudes will inherit from
 */
export abstract class Magnitude implements isConvertible {
  constructor(private value: number) {
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }
  /**
   * Method that returns the value of the magnitude in
   * a different magnitude of the same type.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  abstract convert(destination: string): number | undefined;
}
