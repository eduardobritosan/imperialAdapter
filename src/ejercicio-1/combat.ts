import { DBFighter } from './dbFighter';
import { DCFighter } from './dcFighter';
import { Fighter } from './fighter';
import { MarvelFighter } from './marvelFighter';
import { Pokemon } from './pokemon';
import { Goku } from './goku';
import { Pikachu } from './pikachu';

export class Combat<T extends Fighter, U extends Fighter> {
  private fighter1HP: number;
  private fighter2HP: number;
  constructor(private fighter1: T, private fighter2: U) {
    this.setFighter1HP(fighter1.getDefense() * 5);
    this.setFighter2HP(fighter2.getDefense() * 5);
  }

  public getFighter1HP(): number {
    return this.fighter1HP;
  }

  public setFighter1HP(fighter1HP: number): void {
    this.fighter1HP = fighter1HP;
  }

  public getFighter2HP(): number {
    return this.fighter2HP;
  }

  public setFighter2HP(fighter2HP: number): void {
    this.fighter2HP = fighter2HP;
  }


  public getFighter1(): T {
    return this.fighter1;
  }

  public setFighter1(fighter1: T): void {
    this.fighter1 = fighter1;
  }

  public getFighter2(): U {
    return this.fighter2;
  }

  public setFighter2(fighter2: U): void {
    this.fighter2 = fighter2;
  }

  public effectiveness(type1: Fighter, type2: Fighter): number {
    switch (true) {
      case type1 instanceof DBFighter:
        switch (true) {
          case type2 instanceof DBFighter:
            return 0.5;
          case type2 instanceof MarvelFighter:
            return 1;
          default:
            return 2;
        }
      case type1 instanceof DCFighter:
        switch (true) {
          case type2 instanceof Pokemon:
            return 2;
          case type2 instanceof DCFighter:
            return 0.5;
          default:
            return 1;
        }
      case type1 instanceof Pokemon:
        switch (true) {
          case type2 instanceof Pokemon:
            return 2;
          case type2 instanceof MarvelFighter:
            return 1;
          default:
            return 0.5;
        }
      case type1 instanceof MarvelFighter:
        switch (true) {
          case type2 instanceof DBFighter:
            return 0.5;
          case type2 instanceof DCFighter:
            return 1;
          default:
            return 2;
        }
    }
    return -1;
  }
}
