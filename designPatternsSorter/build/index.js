"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        for (var i in this.collection) {
            for (var j in this.collection) {
                if (this.collection[0 + Number(j)] > this.collection[1 + Number(j)]) {
                    let k = this.collection[0 + Number(j)];
                    let l = this.collection[1 + Number(j)];
                    this.collection[0 + Number(j)] = l;
                    this.collection[1 + Number(j)] = k;
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
//# sourceMappingURL=index.js.map