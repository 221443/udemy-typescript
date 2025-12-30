import { NumbersCollection } from "./NumbersCollection.js";
import { Sorter } from "./Sorter.js";
import { StringCollection } from "./StringCollection.js";
import { StringArrayCollection } from "./StringArrayCollection.js";
import { LinkedList } from "./LinkedList.js";

//const createRandomIntArray = (length: number, min: number, max: number): number[] => {
//  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
//};

//var myArr = createRandomIntArray(100, -50, 100);
//console.log(myArr);
//const mySorter = new Sorter(new NumbersCollection(myArr));
//mySorter.sort();
//mySorter.collection.printData();

//var stringArr = ["A", "b", "a", "c", "z", "y", "A", "x"];
//console.log(stringArr);
//const stringSorter = new Sorter(new StringArrayCollection(stringArr));
//stringSorter.sort();
//stringSorter.collection.printData();

//var myString = "CaABsdfabczxBy";
//console.log(myString);
//const myStringSorter = new Sorter(new StringCollection(myString));
//myStringSorter.sort();
//myStringSorter.collection.printData();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(0);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();

linkedList.printData();
