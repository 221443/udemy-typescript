import { faker } from "@faker-js/faker";

export const red = "red";
export default "blue";

export class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
  getInfo(): string {
    return `User Name: ${this.name}`;
  }
}
