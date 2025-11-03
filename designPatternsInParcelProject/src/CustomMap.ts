import { User } from "./User";
import { Company } from "./Company";

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

  addUserMarker(user: User): void {
    new google.maps.Marker({
        map: this.googleMap,
        position:{
            lat: user.location.latitude,
            lng: user.location.longitude
        }
    });
  }

  addCompanyMarker(company: Company): void{
    new google.maps.Marker({
        map: this.googleMap,
        position:{
            lat: company.location.latitude,
            lng: company.location.longitude
        }
    });
  }
}
