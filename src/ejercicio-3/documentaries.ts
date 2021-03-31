import { BasicStreamableCollection } from './basicStreamableCollection';

/**
 * The documentary type
 */
export type documentary = {
  title: string,
  year: number,
  director: string,
  genre: string,
  runtime: number,
  narrator: string,
}

/**
 * Documentary collection class
 */
export class DocumentaryCollection extends
  BasicStreamableCollection<documentary> {
  constructor(collection: documentary[]) {
    super(collection);
  }

  /**
   * Seach method, which finds all movies that match the criteria
   */
  public search(criteria: string, value: string | number): documentary[] {
    switch (criteria.toLocaleLowerCase()) {
      case 'title':
        const tester = this.getCollection().filter((elementValue) => {
          return elementValue.title == value;
        });
        return tester;
      case 'runtime':
        return this.getCollection().filter((elementValue) => {
          return elementValue.runtime == value;
        });
      case 'year':
        return this.getCollection().filter((elementValue) => {
          return elementValue.year == value;
        });
      case 'director':
        return this.getCollection().filter((elementValue) => {
          return elementValue.director == value;
        });
      case 'genre':
        return this.getCollection().filter((elementValue) => {
          return elementValue.genre == value;
        });
      case 'narrator':
        return this.getCollection().filter((elementValue) => {
          return elementValue.narrator == value;
        });
      default:
        return [];
    }
  }

  /**
   * Prints all elements in the collection.
   */
  public print() {
    this.getCollection().forEach((element) => {
      console.log(`Title: ${element.title}\n\tSeasons: ${element.runtime}` +
        `\n\tDirector: ${element.director}\n\tNarrator: ${element.narrator}` +
        `\n\tGenre: ${element.genre}\n\tYear: ${element.year}\n`);
    });
  }
}
