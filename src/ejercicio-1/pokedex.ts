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
  /**
   * Adds any number of fighters to the pokedex.
   * @param newFighters Any number of new fighters to be added
   */
  public add(...newFighters: Fighter[]) {
    newFighters.forEach((element) => {
      this.getFighterList().push(element);
    });
  }
  /**
   * Method that returns a stringified list.
   * @returns A stringified list of the names of the fighters
   * its storing currently
   */
  public print(): string {
    return this.getFighterList().map((item) => {
      return item.getName();
    }).join();
  }

  /**
   * Removes all items with the matching name
   * @param name The name of the items to be removed
   */
  public remove(name: string) {
    this.getFighterList().forEach((item) => {
      if (item.getName() == name) {
        this.getFighterList().splice(this.getFighterList().indexOf(item), 1);
      }
    });
  }
}
