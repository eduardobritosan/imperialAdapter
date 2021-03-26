import { Fighter } from './fighter';

export class MockFighter extends Fighter {
  constructor(name: string, height: number,
    weight: number, attack: number,
    defense: number, speed: number) {
    super(name, height, weight, attack, defense, speed);
  }
}
