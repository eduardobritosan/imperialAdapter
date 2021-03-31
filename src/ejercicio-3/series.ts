import { BasicStreamableCollection } from './basicStreamableCollection';

/**
 * The series type
 */
export type series = {
  title: string,
  year: number,
  director: string,
  genre: string,
  episodes: number,
  seasons: number
}

/**
 * Series collection class
 */
export class SeriesCollection extends BasicStreamableCollection<series> {
  constructor(collection: series[]) {
    super(collection);
  }

  /**
   * Seach method, which finds all series that match the criteria
   */
  public search(criteria: string, value: string | number): series[] {
    switch (criteria.toLocaleLowerCase()) {
      case 'title':
        return this.getCollection().filter((elementValue) => {
          return elementValue.title == value;
        });
      case 'seasons':
        return this.getCollection().filter((elementValue) => {
          return elementValue.seasons == value;
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
      case 'episodes':
        return this.getCollection().filter((elementValue) => {
          return elementValue.episodes == value;
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
      console.log(`Title: ${element.title}\n\tSeasons: ${element.seasons}` +
        `\n\tEpisodes: ${element.episodes}\n\tDirector: ${element.director}` +
        `\n\tGenre: ${element.genre}\n\tYear: ${element.year}\n`);
    });
  }
}
