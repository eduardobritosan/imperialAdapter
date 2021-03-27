import { DBFighter } from './dbFighter';
import { DCFighter } from './dcFighter';
import { Fighter } from './fighter';
import { MarvelFighter } from './marvelFighter';
import { Pokemon } from './pokemon';

/**
 * Class that handles combat between two fighters of any type
 */
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
  /**
   * Calcs the effectiveness of an attack based on the universe of
   * the attacker and defender.
   * @param type1 The attacking fighter
   * @param type2 The defending fighter
   * @returns The effectiveness, that can be either 0.5, 1 or 2.
   */
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
  /**
   * Method that calcs how much damage an attack will do.
   * @param attacker Attacking fighter
   * @param defender Defending fighter
   * @returns How much damage did an attack deal
   */
  public damage(attacker: Fighter, defender: Fighter) {
    const effectiveness = this.effectiveness(attacker, defender);
    return 20 * (attacker.getAttack() / defender.getDefense()) *
      effectiveness;
  }

  /**
   * Shows the health of both fighters
   */
  private showHealth(): void {
    console.log(`${this.getFighter1().getName()}` +
      ` HP: ${this.getFighter1HP().toFixed(2)}`);
    console.log(`${this.getFighter2().getName()}` +
      ` HP: ${this.getFighter2HP().toFixed(2)}`);
  }

  /**
   * Prints the current hit
   * @param attacker Attacking fighter
   * @param defender Defending fighter
   */
  private printHit(attacker: Fighter, defender: Fighter): void {
    console.log(`${attacker.talk()}`);
    console.log(`${attacker.getName()} hits ${defender.getName()}` +
      ` for ${this.damage(attacker, defender).toFixed(2)}`);
  }
  /**
   * Returns a string naming the winner of the fight
   */
  private checkWinner(): string {
    const result = (this.getFighter1HP() > 0) ?
      `${this.fighter1.getName()} is the winner` :
      `${this.fighter2.getName()} is the winner`;

    if (this.getFighter1HP() > 0) {
      return result;
    }
    return result;
  }

  /**
   * Method that starts the combat.
   * @returns the string that declare the winner.
   */
  start(): string {
    this.showHealth();
    while (this.getFighter1HP() > 0 && this.getFighter2HP() > 0) {
      this.setFighter2HP(this.getFighter2HP() - this.damage(this.getFighter1(),
        this.getFighter2()));
      this.printHit(this.getFighter1(), this.getFighter2());
      this.showHealth();
      if (this.getFighter2HP() > 0) {
        this.setFighter1HP(this.getFighter1HP() - this.damage(
          this.getFighter2(), this.getFighter1()));
        this.printHit(this.getFighter2(), this.getFighter1());
        this.showHealth();
      }
    }
    return this.checkWinner();
  }
}
