import { ComicFighter } from './comicFighter';

/**
 * Abstract class that defines a fighter from DC Comics.
 */
export abstract class DCFighter extends ComicFighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number,
    originComic: string, debutDate: Date,
    private realName: string) {
    super(name, height, weight, attack, defense, speed, originComic,
      debutDate);
  }

  public getRealName(): string {
    return this.realName;
  }

  public setRealName(realName: string) {
    this.realName = realName;
  }
}
