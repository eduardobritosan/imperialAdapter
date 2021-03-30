import { Mass } from './mass';

/**
 * Class that defines a kilogram magnitude, of the mass kind.
 */
export class Kg extends Mass {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the kilogram in
   * a different magnitude of the same type, in this case gram,
   * and pound.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'grams':
        return (this.getValue() * 1000);
      case 'pounds':
        return (this.getValue() * 2.205);
      default:
        return undefined;
    }
  }
}
