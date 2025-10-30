import { User, red } from "./User";

// The default should not be used, but is included to demonstrate import syntax, not best practice
import whatever from "./User"; // Importing the default export - can use any name, constains "blue"

import { Company } from "./Company";

const company = new Company();
console.log(company);

const user = new User();
console.log(user);
console.log("Favorite color is: " + red);
console.log("Least favorite color is: " + whatever);
