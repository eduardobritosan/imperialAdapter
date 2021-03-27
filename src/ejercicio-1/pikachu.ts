import { Pokemon } from './pokemon';

export class Pikachu extends Pokemon {
  /**
  * Initializes with the known values of Pikachu
  */
  constructor() {
    super('Pikachu', 0.4, 6, 55, 30, 90, 25);
  }

  public talk() {
    return `Pika pika!`;
  }
}
