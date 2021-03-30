/**
 * Interface that makes a class able to be converted
 */
export interface isConvertible {
  /**
   * Method that returns the value of the magnitude in
   * a different magnitude of the same type.
   * @param destination the target magnitude
   * @returns the converted magnitude
   */
  convert(destination: string): number | undefined;
}
