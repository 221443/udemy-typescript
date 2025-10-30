class Vehicle {
    public drive(): void {
        console.log("Driving...");
    }   
    public honk(): void {
        console.log("Beep beep!");
    }   
    protected honkProtected(): void {
        console.log("Beep beep! (from protected method)");
    }
    public honkProtectedCaller(): void {
        this.honkProtected();
    }
}

class Car extends Vehicle {
    // public, private, protected - same in java
    private wheels: number;
    constructor(wheels: number) {
        super();
        this.wheels = wheels;
    }
    public getWheels(): number {
        return this.wheels;
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
//vehicle.honkProtected(); // Error: Property 'honkProtected' is protected and only accessible within class 'Vehicle' and its subclasses.
vehicle.honkProtectedCaller(); // This works because it's called from a public method within the class.

const car = new Car(4);
car.drive();
car.honk();
car.honkProtectedCaller();
console.log(`Car wheels: ${car.getWheels()}`);

export {};