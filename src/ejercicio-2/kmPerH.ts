import { Speed } from './speed';

/**
 * Class that defines a meter per second magnitude, of the speed kind.
 */
export class KmPerH extends Speed {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the mpers in
   * a different magnitude of the same type, in this case kilometers per hour,
   * and miles per hour.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'mpers':
        return (this.getValue() / 3.6);
      case 'milespers':
        return (this.getValue() / 5794);
      default:
        return undefined;
    }
  }
}