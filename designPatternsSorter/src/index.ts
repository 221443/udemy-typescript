class Sorter {
  public collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (this.collection[j]! > this.collection[j + 1]!) {
          const leftHand = this.collection[j]!;
          const rightHand = this.collection[j + 1]!;
          this.collection[j] = rightHand;
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const createRandomIntArray = (length: number, min: number, max: number): number[] => {
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
