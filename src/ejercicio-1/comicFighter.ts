import { Fighter } from './fighter';
/**
 * Class that defines fighters who come from comic books.
 * Has attributes originComic and debutDate.
 */
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
