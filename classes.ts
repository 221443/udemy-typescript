class Vehicle {
  private color: string = "red";
  public getColor(): string {
    return this.color;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public printColor(): void {
    console.log("This vehicle's color is: " + this.getColor());
  }
  public drive(): void {
    console.log("Driving...");
  }
  public honk(): void {
    console.log("Beep beep!");
  }
  private honkPrivate(): void {
    console.log("Beep beep! (from private method)");
  }
  public honkPrivateCaller(): void {
    this.honkPrivate();
  }
}

class Car extends Vehicle {
  // public, private, protected - same in java
  private wheels: number;
  constructor(color: string, wheels: number) {
    super();
    //this.color = color; // Error: Property 'color' is private and only accessible within class 'Vehicle'.
    this.setColor(color); // Use public setter to set color
    this.wheels = wheels;
  }
  public getWheels(): number {
    return this.wheels;
  }

  protected honkProtected(): void {
    console.log("Car honk (protected)!");
  }

  public honkProtectedCaller(): void {
    this.honkProtected();
  }
}

const vehicle = new Vehicle();
vehicle.printColor();
vehicle.drive();
vehicle.honk();
//vehicle.honkProtected(); // Error: Property 'honkProtected' is protected and only accessible within class 'Vehicle' and its subclasses.
vehicle.honkPrivateCaller(); // This works because it's called from a public method within the class.

const car = new Car("blue", 4);
car.printColor();
car.drive();
car.honk();
car.honkPrivateCaller();
car.honkProtectedCaller(); // This works because it's called from a public method within the class.
console.log(`Car wheels: ${car.getWheels()}`);

export {};
