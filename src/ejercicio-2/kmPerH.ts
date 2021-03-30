import { Speed } from './speed';

/**
 * Class that defines a kilometer per hour magnitude, of the speed kind.
 */
export class KmPerH extends Speed {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the kilometer per hour in
   * a different magnitude of the same type, in this case meters per second,
   * and miles per second.
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
