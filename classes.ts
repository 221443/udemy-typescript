class Vehicle {
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
    constructor(wheels: number) {
        super();
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
vehicle.drive();
vehicle.honk();
//vehicle.honkProtected(); // Error: Property 'honkProtected' is protected and only accessible within class 'Vehicle' and its subclasses.
vehicle.honkPrivateCaller(); // This works because it's called from a public method within the class.

const car = new Car(4);
car.drive();
car.honk();
car.honkPrivateCaller();
car.honkProtectedCaller(); // This works because it's called from a public method within the class.
console.log(`Car wheels: ${car.getWheels()}`);

export {};