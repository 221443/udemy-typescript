import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }
  getInfo(): string {
    return `Company Name: ${this.companyName}<br>Catch Phrase: ${this.catchPhrase}`;
  }
}
