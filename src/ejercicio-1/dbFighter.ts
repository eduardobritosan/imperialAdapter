import { ComicFighter } from './comicFighter';

/**
 * Abstract class that defines Fighters from the
 * Dragon Ball universe. Its defining attribute is their
 * powerlevel.
 */
export abstract class DBFighter extends ComicFighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number,
    originComic: string, debutDate: Date,
    private powerLevel: number) {
    super(name, height, weight, attack, defense, speed, originComic,
      debutDate);
  }

  public getPowerLevel(): number {
    return this.powerLevel;
  }

  public setPowerLevel(powerLevel: number) {
    this.powerLevel = powerLevel;
  }
}
