/**
 * Defines a searchable collection
 */
export interface Searchable <T> {
  /**
   * Finds any number of elements that match the value passed
   * @param criteria The search criteria
   * @param value The value that should match
   */
  search(criteria: string, value: number | string): T[];
}
