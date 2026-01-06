// oops concept

// 1. class & object

// what is object ?
// real world entity which have state and behavior

// state -> properties/attributes
// behavior -> methods/functions
// example -> car, bike, person, animal etc

const person = {
  name: "Anurag",
  age: 23,
  address: "123 Main St",
  gender: "male",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is Anurag

// problem with object literal
// 1. no code reusability
// 2. no data hiding
// 3. no constructor to initialize object
// in this all time we are creating object literal again and again

// solution -> class
// class -> blueprint/template to create object

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person("Anurag", 23);
const person2 = new Person("Rahul", 25);
person1.greet(); // Hello, my name is Anurag
person2.greet(); // Hello, my name is Rahul

// what is constructor ?
// special method in class that call autometically when we create object
// used to initialize object properties
// we can have only one constructor in a class

// 2. access modifier
// control the visibility of class members(properties and methods)
// 3 types -> public, private, protected  

class Car {
    public brand: string;
    private model: string;
    protected year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    public getModel() {
        return this.model;
    }
    protected getYear() {
        return this.year;
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.brand); // Toyota
// console.log(car1.model); // Error: Property 'model' is private and only accessible within class 'Car'.
// console.log(car1.year); // Error: Property 'year' is protected and only accessible within class 'Car' and its subclasses.
console.log(car1.getModel()); // Camry
// console.log(car1.getYear()); // Error: Property 'getYear' is protected and only accessible within class 'Car' and its subclasses.  


// 3. inheritance
// mechanism to create new class from existing class
// existing class -> base class/parent class/super class
// new class -> derived class/child class/sub class
// use extends keyword  


class SportsCar extends Car {
    public getCarYear() {
        return this.getYear();
    }
}
const sportsCar1 = new SportsCar("Ferrari", "488 GTB", 2019);
console.log(sportsCar1.brand); // Ferrari
console.log(sportsCar1.getCarYear()); // 2019

// 4. method overriding
// derived class provide specific implementation of method that is already defined in base class

// class Animal {
//     speak() {
//         return "Animal makes a sound";
//     }
// }
// class Dog extends Animal {
//     speak() {
//         return "Dog barks";
//     }
// }

// const myDog = new Dog();
// console.log(myDog.speak()); // Dog barks

// 5. super keyword
// refer to parent class
// used to call parent class constructor

class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Child extends Parent {
    age: number;
    constructor(name: string, age: number) {
        super(name);   // call parent class constructor
        this.age = age;
    }
    info() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const child1 = new Child("Anurag", 23);
console.log(child1.info()); // Name: Anurag, Age: 23

// 6. static members
// belong to class rather than instance of class
// use static keyword

class MathUtil {
    static pi: number = 3.14;

    static calculateCircumference(radius: number): number {
        return 2 * MathUtil.pi * radius;
    }
}

console.log(MathUtil.pi); // 3.14
console.log(MathUtil.calculateCircumference(5)); // 31.400000000000002

// 7. abstract class
// cannot be instantiated directly
// meant to be subclassed
// can have abstract methods (without implementation)
// subclasses must implement abstract methods 

abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
}

class Rectangle extends Shape {
    width: number
    height: number
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.area()}`); // Area: 50
console.log(`Perimeter: ${rect.perimeter()}`); // Perimeter: 30

// 8. interfaces
// define contract for classes
// specify properties and methods that implementing class must have

interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
}

class Bike implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {

    }
    start(): void {
        console.log(`${this.make} ${this.model} started.`);
    }
    stop(): void {
        console.log(`${this.make} ${this.model} stopped.`);
    }
}

const bike1 = new Bike("Yamaha", "FZ", 2021);
bike1.start(); // Yamaha FZ started.
bike1.stop(); // Yamaha FZ stopped.


// interface can also extend other interfaces

interface ElectricVehicle extends Vehicle {
    batteryCapacity: number;
    charge(): void;
}

class ElectricCar implements ElectricVehicle {
    constructor(
        public make: string,
        public model: string,
        public year: number,
        public batteryCapacity: number
    ) {}
    start(): void {
        console.log(`${this.make} ${this.model} started.`);
    }
    stop(): void {
        console.log(`${this.make} ${this.model} stopped.`);
    }
    charge(): void {
        console.log(`${this.make} ${this.model} is charging.`);
    }
}
const ev1 = new ElectricCar("Tesla", "Model S", 2022, 100);
ev1.start(); // Tesla Model S started.
ev1.charge(); // Tesla Model S is charging.
ev1.stop(); // Tesla Model S stopped.

// interface can also be used to define function types
interface MathOperation {
    (a: number, b: number): number;
}
const add: MathOperation = (a: number, b: number): number => {
    return a + b;
};
const multiply: MathOperation = (a: number, b: number): number => {
    return a * b;
};
console.log(add(5, 10)); // 15
console.log(multiply(5, 10)); // 50

// 9. readonly modifier
// make properties immutable after initialization
interface Admin {
    readonly name: string;
    readonly hobbies: readonly string[];
}
const person6: Admin = {
    name: "Anurag",
    hobbies: ["reading", "coding"]
};
// person6.hobbies.push("traveling"); // Error: Cannot assign to 'hobbies' because it is a read-only property

// person6.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property because it is a read-only property

type user = { name: string; age: number };
type role = { role: string };
type SuperUser = user & role;
const superUser1: SuperUser = { name: "Anurag", age: 23, role: "Administrator" };

type Person1 = {
    users: user[];
    readonly role: role; // this property is read-only you cannot modify it after initialization
}

class Shop{
    shopName: string;
    constructor(name: string){
        this.shopName = name;
    }
}

class Branch extends Shop{
    branchLocation: string
    constructor(name: string, location: string){
        super(name);
        this.branchLocation = location;
    }
    getDetails(): string{
        return `Shop Name: ${this.shopName}, Branch Location: ${this.branchLocation}`;
    } 
}

const myBranch = new Branch("Tea House", "Downtown");
console.log(myBranch.getDetails());
// Shop Name: Tea House, Branch Location: Downtown

// 10. utility types
// predefined generic types to facilitate common type transformations
interface PersonDetails {
    name: string;
    age: number;
    address: string;
    geneder: string;
    hobbies: string[];
}

type PartialPerson = Partial<PersonDetails>;

const person3: PartialPerson = {
  name: "Anurag",
};

type RequiredPerson = Required<PersonDetails>;
const person4: RequiredPerson = {
  name: "Anurag",
  age: 23,
  address: "123 Main St",
  geneder: "male",
  hobbies: ["reading", "coding"]
};

type ReadonlyPerson = Readonly<PersonDetails>;

const person5: ReadonlyPerson = {
    name: "Anurag",
    age: 23,
    address: "123 Main St",
    geneder: "male",
    hobbies: ["reading", "coding"]
};

person5.hobbies.push("traveling"); // Error: Cannot assign to 'hobbies' because it is a read-only property
// person5.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property

// 11. polymorphism
// ability of different classes to be treated as instances of the same class through a common interface
// typically achieved through method overriding

abstract class Animal {
    abstract speak(): string;
}

class Cat extends Animal {
    speak(): string {
        return "Cat meows";
    }
}

class Cow extends Animal {
    speak(): string {
        return "Cow moos";
    }
}

const myCat: Animal = new Cat();
const myCow: Animal = new Cow();
console.log(myCat.speak()); // Cat meows
console.log(myCow.speak()); // Cow moos


// 12. encapsulation
// bundle data (properties) and methods (functions) that operate on the data within a single unit (class)
// restrict direct access to some of the object's components
// use access modifiers (private, protected, public)

class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): boolean {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
    public getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500
const success = myAccount.withdraw(2000);
console.log(success); // false
const success2 = myAccount.withdraw(1000);
console.log(success2); // true
console.log(myAccount.getBalance()); // 500

// 13. abstraction`
// hide complex implementation details and show only essential features

abstract class Employee {
    constructor(public name: string, public id: number) {}
    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
    constructor(name: string, id: number, public monthlySalary: number) {
        super(name, id);
    }
    calculateSalary(): number {
        return this.monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name: string, id: number, public hourlyRate: number, public hoursWorked: number) {
        super(name, id);
    }
    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTimeEmp = new FullTimeEmployee("Anurag", 1, 5000);
console.log(`${fullTimeEmp.name}'s Salary: ${fullTimeEmp.calculateSalary()}`); // Anurag's Salary: 5000
const partTimeEmp = new PartTimeEmployee("Rahul", 2, 20, 80);
console.log(`${partTimeEmp.name}'s Salary: ${partTimeEmp.calculateSalary()}`); // Rahul's Salary: 1600


// 13. decorators
// special kind of declaration that can be attached to a class, method, accessor, property, or parameter
// used to modify or enhance the behavior of the target

// function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;    
//     descriptor.value = function(...args: any[]) {
//         console.log(`Method ${propertyKey} called with args: ${JSON.stringify(args)}`);
//         return originalMethod.apply(this, args);
//     }
//     return descriptor;
// }   

// class Calculator {
//     @Log
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     @Log
//     multiply(a: number, b: number): number {
//         return a * b;
//     }
// }

// const calc = new Calculator();
// console.log(calc.add(5, 10)); // Method add called with args: [5,10] \n 15
// console.log(calc.multiply(5, 10)); // Method multiply called with args: [5,10] \n 50


// 13. modules
// organize code into reusable and maintainable units
// each file is treated as a module
// use export and import keywords

// src/utils.ts

// export function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

