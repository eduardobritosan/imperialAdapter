import { Speed } from './speed';

/**
 * Class that defines a miles per second magnitude, of the speed kind.
 */
export class MilesPerS extends Speed {
  constructor(value: number) {
    super(value);
  }

  /**
   * Method that returns the value of the Miles/Second in
   * a different magnitude of the same type, in this case kilometers per hour,
   * and meters per second.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined {
    destination = destination.toLocaleLowerCase();
    switch (destination) {
      case 'mpers':
        return (this.getValue() * 1609);
      case 'kmperh':
        return (this.getValue() * 5794);
      default:
        return undefined;
    }
  }
}
