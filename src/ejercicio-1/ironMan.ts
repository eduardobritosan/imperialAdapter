import { MarvelFighter } from './marvelFighter';


export class IronMan extends MarvelFighter {
  constructor() {
    const debutDate = new Date(1963, 2, 1);
    super('Iron Man', 1.85, 102, 100, 100, 95,
      'Tales of Suspense #39', debutDate, 'Anthony Edward Stark');
  }

  public talk() {
    return 'I am Iron Man';
  }
}
