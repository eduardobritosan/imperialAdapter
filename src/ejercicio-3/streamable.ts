/**
 * Defines a streamable collection, that is, one that
 * has all the usual attributes of a collection in a streaming service
 */
export interface Streamable<T> {
  /**
   * Adds new elements to a collection
   * @param newElement new element to be added to collection
   */
  add(newElement: T): void;

  /**
   * Removes element from the collection.
   * @param id the id of the element to be removed.
   */
  remove(id: number): void;
}
