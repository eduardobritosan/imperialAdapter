import { Mass } from './mass';

/**
 * Class that defines a gram magnitude, of the mass kind.
 */
export class Gram extends Mass {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the gram in
   * a different magnitude of the same type, in this case kilogram,
   * and pound.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'kilograms':
        return (this.getValue() / 1000);
      case 'pounds':
        return (this.getValue() / 454);
      default:
        return undefined;
    }
  }
}
