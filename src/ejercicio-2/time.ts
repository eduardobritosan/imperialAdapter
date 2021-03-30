import { Magnitude } from './magnitude';

/**
 * Abstract class that represents all time type magnitudes
 */
export abstract class Time extends Magnitude {
  constructor(value: number) {
    super(value);
  }
}
