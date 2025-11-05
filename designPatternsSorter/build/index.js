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
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    const rightHand = this.collection[j + 1];
                    this.collection[j] = rightHand;
                    this.collection[j + 1] = leftHand;
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
//var stringArr = ["b", "a", "c", "z", "y", "x"];
//console.log(stringArr);
//const stringSorter = new Sorter(stringArr);
//stringSorter.sort();
//console.log(stringSorter.collection);
//# sourceMappingURL=index.js.map