/**
 * CustomMap class for managing Google Maps instances.
 *
 * This class wraps the Google Maps API and provides a simplified interface
 * for creating and managing map instances in your application.
 *
 * @example
 * ```typescript
 * const map = new CustomMap("map");
 * ```
 */
export class CustomMap {
  /** The underlying Google Maps instance */
  private googleMap: google.maps.Map;

  /**
   * Creates a new CustomMap instance.
   *
   * @param elementId - The HTML element ID where the map will be rendered
   * @throws {TypeError} If the element with the specified ID is not found
   */
  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId)!, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
}
