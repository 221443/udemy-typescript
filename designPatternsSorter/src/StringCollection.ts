  import { Sorter } from "./Sorter.js";
class StringCollection extends Sorter {
  private data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }
  public swap(leftIndex: number, rightIndex: number): void {
    const strArray = this.data.split("");
    [strArray[leftIndex], strArray[rightIndex]] = [strArray[rightIndex]!, strArray[leftIndex]!];
    this.data = strArray.join("");
  }
  public compare(leftIndex: number, rightIndex: number): boolean {
    const strArray = this.data.split("");
    if (strArray[leftIndex]?.toUpperCase() != strArray[rightIndex]?.toUpperCase()) {
      return strArray[leftIndex]?.toUpperCase()! > strArray[rightIndex]?.toUpperCase()!;
    } else {
      return strArray[leftIndex]! > strArray[rightIndex]!;
    }
  }
  get length(): number {
    return this.data.length;
  }
  public printData(): void {
    console.log(this.data);
  }
}

export { StringCollection };
