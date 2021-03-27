import { DCFighter } from './dcFighter';


export class Flash extends DCFighter {
  /**
   * Initializes with the known values of The Flash
   */
  constructor() {
    const debutDate = new Date(2011, 9, 1);
    super('The Flash', 1.82, 88, 200, 50, 250,
      'Flashpoint Vol 2 #5', debutDate, 'Bartholomew Henry Allen');
  }

  public talk() {
    return 'I am the Flash, the fastest man alive';
  }
}
