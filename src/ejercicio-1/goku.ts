import { DBFighter } from './dbFighter';


export class Goku extends DBFighter {
  /**
 * Initializes with the known values of Goku
 */
  constructor() {
    const debutDate = new Date(1984, 0, 1);
    super('Son Goku', 1.75, 62, 300, 300, 200,
      'Grand Finale, Dr. Slump', debutDate, 9001);
  }

  public talk() {
    return '...And this is to go... EVEN FURTHER BEYOND!';
  }
}
