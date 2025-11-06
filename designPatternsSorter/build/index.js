"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                // All of this only works if collection is number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        const rightHand = this.collection[j + 1];
                        this.collection[j] = rightHand;
                        this.collection[j + 1] = leftHand;
                    }
                }
                // All of this only works if collection is string
                if (typeof this.collection === "string") {
                    const arayed = this.collection.split("");
                    if (arayed[j] > arayed[j + 1]) {
                        const leftHand = arayed[j];
                        const rightHand = arayed[j + 1];
                        arayed[j] = rightHand;
                        arayed[j + 1] = leftHand;
                    }
                    this.collection = arayed.join("");
                }
            }
        }
    }
}
const createRandomIntArray = (length, min, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};
var myArr = createRandomIntArray(100, -50, 100);
console.log(myArr);
const mySorter = new Sorter(myArr);
mySorter.sort();
console.log(mySorter.collection);
var stringArr = ["b", "a", "c", "z", "y", "x"];
console.log(stringArr);
const stringSorter = new Sorter(stringArr);
stringSorter.sort();
console.log(stringSorter.collection);
var myString = "aABsdfabczxy";
console.log(myString);
const myStringSorter = new Sorter(myString);
myStringSorter.sort();
console.log(myStringSorter.collection);
//# sourceMappingURL=index.js.map