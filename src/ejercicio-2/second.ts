import { Time } from './time';

/**
 * Class that defines a second magnitude, of the time kind.
 */
export class Second extends Time {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the second in
   * a different magnitude of the same type, in this case minutes,
   * and hours.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'minutes':
        return (this.getValue() / 60);
      case 'hours':
        return (this.getValue() / 36000);
      default:
        return undefined;
    }
  }
}