import { BasicStreamableCollection } from './basicStreamableCollection';

/**
 * The movie type
 */
export type movie = {
  title: string,
  year: number,
  director: string,
  genre: string,
  runtime: number,
}

/**
 * Movie collection class
 */
export class MovieCollection extends BasicStreamableCollection<movie> {
  constructor(collection: movie[]) {
    super(collection);
  }

  /**
   * Seach method, which finds all movies that match the criteria
   */
  public search(criteria: string, value: string | number): movie[] {
    switch (criteria.toLocaleLowerCase()) {
      case 'title':
        return this.getCollection().filter((elementValue) => {
          return elementValue.title == value;
        });
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
        `\n\tDirector: ${element.director}` +
        `\n\tGenre: ${element.genre}\n\tYear: ${element.year}\n`);
    });
  }
}
