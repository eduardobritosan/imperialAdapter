import { Magnitude } from './magnitude';

/**
 * Abstract class that represents all length type magnitudes
 */
export abstract class Length extends Magnitude {
  constructor(value: number) {
    super(value);
  }
}
