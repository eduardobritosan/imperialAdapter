import { Mass } from './mass';

/**
 * Class that defines a pound magnitude, of the mass kind.
 */
export class Pound extends Mass {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the pound in
   * a different magnitude of the same type, in this case gram,
   * and kilogram.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'grams':
        return (this.getValue() * 454);
      case 'kilograms':
        return (this.getValue() / 2.205);
      default:
        return undefined;
    }
  }
}
