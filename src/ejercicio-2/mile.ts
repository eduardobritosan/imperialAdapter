import { Length } from './length';

/**
 * Class that defines a mile magnitude, of the mass kind.
 */
export class Mile extends Length {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the mile in
   * a different magnitude of the same type, in this case kilometer,
   * and meter.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'kilometers':
        return (this.getValue() * 1.609);
      case 'meters':
        return (this.getValue() * 1609);
      default:
        return undefined;
    }
  }
}
