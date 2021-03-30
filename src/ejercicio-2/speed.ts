import { Magnitude } from './magnitude';

/**
 * Abstract class that represents all speed type magnitudes
 */
export abstract class Speed extends Magnitude {
  constructor(value: number) {
    super(value);
  }
}
