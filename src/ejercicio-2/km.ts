import { Length } from './length';

/**
 * Class that defines a kilometer magnitude, of the length kind.
 */
export class Km extends Length {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the kilometer in
   * a different magnitude of the same type, in this case mile,
   * and meter.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'meters':
        return (this.getValue() * 1000);
      case 'miles':
        return (this.getValue() / 1.609);
      default:
        return undefined;
    }
  }
}
