import { Fighter } from './fighter';

/**
 * Abstract class that defines the shape of a Pokemon fighter.
 */
export abstract class Pokemon extends Fighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number, private dexNumber: number) {
    super(name, height, weight, attack, defense, speed);
  }

  public getDexNumber(): number {
    return this.dexNumber;
  }

  public setDexNumber(dexNumber: number) {
    this.dexNumber = dexNumber;
  }
}
