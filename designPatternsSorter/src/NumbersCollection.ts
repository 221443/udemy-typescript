import { Sorter } from "./Sorter.js";
class NumbersCollection extends Sorter {
  private data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }

  public swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex]!, this.data[leftIndex]!];
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex]! > this.data[rightIndex]!;
  }
  get length(): number {
    return this.data.length;
  }
  public printData(): void {
    console.log(this.data);
  }
}

export { NumbersCollection };
