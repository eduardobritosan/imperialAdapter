import { Printable } from './printable';
import { Searchable } from './searchable';
import { Streamable } from './streamable';

export abstract class BasicStreamableCollection<T>
  implements Streamable<T>, Printable, Searchable<T> {
  constructor(private collection: T[]) { }

  public getCollection(): T[] {
    return this.collection;
  }

  public setCollection(collection: T[]): void {
    this.collection = collection;
  }

  /**
   * Adds an element to the collection
   * @param element the element to be added
   */
  public add(element: T) {
    this.getCollection().push(element);
  }

  /**
   * Removes an element from the collection
   * @param id The index of the element in the array to be removed.
   */
  public remove(id: number) {
    this.setCollection(this.getCollection().
      filter((item, index) => index !== id));
  }

  public abstract search(criteria: string, value: number | string): T[];

  public abstract print(): void;
}

