import { Length } from './length';

/**
 * Class that defines a meter magnitude, of the length kind.
 */
export class Meter extends Length {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the meter in
   * a different magnitude of the same type, in this case kilometer,
   * and mile.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'kilometers':
        return (this.getValue() / 1000);
      case 'miles':
        return (this.getValue() / 1609);
      default:
        return undefined;
    }
  }
}
