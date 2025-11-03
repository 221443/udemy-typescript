/// <reference types="@types/google.maps" />

import { User, red } from "./User";
import { CustomMap } from "./CustomMap";

// The default should not be used, but is included to demonstrate import syntax, not best practice
import whatever from "./User"; // Importing the default export - can use any name, constains "blue"

import { Company } from "./Company";

const company = new Company();
console.log(company);

const user = new User();
console.log(user);

const customMap = new CustomMap("map");

customMap.addUserMarker(user);
