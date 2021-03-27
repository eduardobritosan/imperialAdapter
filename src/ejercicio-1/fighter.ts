/**
 * Fighter class that sets up the behaviour and shape
 * of all inheriting types of fighters.
 */
export abstract class Fighter {
  constructor(private name: string, private height: number,
    private weight: number, private attack: number,
    private defense: number, private speed: number) {
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number) {
    this.height = height;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number) {
    this.weight = weight;
  }

  public getAttack(): number {
    return this.attack;
  }

  public setAttack(attack: number) {
    this.attack = attack;
  }

  public getDefense(): number {
    return this.defense;
  }

  public setDefense(defense: number) {
    this.defense = defense;
  }

  public getSpeed(): number {
    return this.speed;
  }

  public setSpeed(speed: number) {
    this.speed = speed;
  }

  /**
   * Abstract method that defines that all fighters
   * must be able to talk.
   */
  public abstract talk(): string;
}
