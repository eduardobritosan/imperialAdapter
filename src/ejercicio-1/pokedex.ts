import { Fighter } from './fighter';

export class Pokedex {
  private fighterList: Fighter[] = [];

  constructor() { };

  public getFighterList(): Array<Fighter> {
    return this.fighterList;
  }

  public setFighterList(fighterList: Array<Fighter>): void {
    this.fighterList = fighterList;
  }

  public add(...newFighters: Fighter[]) {
    newFighters.forEach((element) => {
      this.getFighterList().push(element);
    });
  }

  public print(): string {
    return this.getFighterList().map((item) => {
      return item.getName();
    }).join();
  }
}
