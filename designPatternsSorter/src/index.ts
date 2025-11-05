class Sorter {
  public collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
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

const createRandomIntArray = (length: number, min: number, max: number): number[] => {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

var myArr = createRandomIntArray(100, -50, 100);
console.log(myArr);
const mySorter = new Sorter(myArr);
mySorter.sort();
console.log(mySorter.collection);
