import { Magnitude } from './magnitude';

/**
 * Abstract class that represents all mass type magnitudes
 */
export abstract class Mass extends Magnitude {
  constructor(value: number) {
    super(value);
  }
}
