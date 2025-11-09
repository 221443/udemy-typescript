class StringArrayCollection {
  private data: string[];
  constructor(data: string[]) {
    this.data = data;
  }
  public swap(leftIndex: number, rightIndex: number) {
    [this.data[leftIndex], this.data[rightIndex]] = [this.data[rightIndex]!, this.data[leftIndex]!];
  }
  public compare(leftIndex: number, rightIndex: number): boolean {
    if (this.data[leftIndex]?.toUpperCase() != this.data[rightIndex]?.toUpperCase()) {
      return this.data[leftIndex]?.toUpperCase()! > this.data[rightIndex]?.toUpperCase()!;
    } else {
      return this.data[leftIndex]! > this.data[rightIndex]!;
    }
  }
  get length(): number {
    return this.data.length;
  }
  public printData(): void {
    console.log(this.data);
  }
}

export { StringArrayCollection };
