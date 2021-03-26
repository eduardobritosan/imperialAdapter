import { Fighter } from './fighter';

export abstract class ComicFighter extends Fighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number, private originComic: string,
    private debutDate: Date) {
    super(name, height, weight, attack, defense, speed);
  }

  public getOriginComic(): string {
    return this.originComic;
  }

  public setOriginComic(originComic: string) {
    this.originComic = originComic;
  }

  public getDebutDate(): Date {
    return this.debutDate;
  }

  public setDebutDate(debutDate: Date) {
    this.debutDate = debutDate;
  }
}
