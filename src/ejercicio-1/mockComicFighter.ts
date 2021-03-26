import { ComicFighter } from './comicFighter';

export class MockComicFighter extends ComicFighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number, originComic: string,
    debutDate: Date) {
    super(name, height, weight, attack, defense, speed, originComic,
      debutDate);
  }

  public talk() {
    return `I\'m ${this.getName()} I really don\'t exist`;
  }
}
