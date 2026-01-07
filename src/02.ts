// typescript practice

// all types are lower case
let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];
let g: unknown = 5;
let h: void = undefined;
let i: null = null;
let j: undefined = undefined;
const k: {} = {};
let l: never;

// ========== type inference ==========
let inferredString = "this is a string";
// inferredString = 5; // error
// inferredString = true; // error

// ========== union type ==========
let unionType: number | string;
unionType = 5;
unionType = "hello";
// unionType = true; // error

// ========== intersection type ==========
interface Person {
  name: string;
  age: number;
}
interface Employee {
  employeeId: number;
}
let intersectionType: Person & Employee;
intersectionType = {
  name: "Alice",
  age: 30,
  employeeId: 1234,
};

// ======= literal type =========
let literalType: "hello" | "world";
literalType = "hello";
literalType = "world";
// literalType = 'hi'; // error

// ======= type assertion =========
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");

// ======= function type =========
function add(x: number, y: number): number {
  return x + y;
}
const multiply = (x: number, y: number): number => {
  return x * y;
};
function logMessage(message: string): void {
  console.log(message);
}
// logMessage('Hello, TypeScript!');

// ======= optional & default parameters =======
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}
// console.log(greet('Alice')); // Hello, Alice!
// console.log(greet('Bob', 'Hi')); // Hi, Bob!

// ======= rest parameters =======
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumAll(1, 2, 3, 4)); // 10

// ======= function overloading =======
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
// console.log(combine(1, 2)); // 3
// console.log(combine('Hello, ', 'World!')); // Hello, World!

// ======= generic functions =======
function identity<T>(arg: T): T {
  return arg;
}
// console.log(identity<number>(5)); // 5
// console.log(identity<string>('Hello')); // Hello
// console.log(identity<boolean>(true)); // true

// ======= generic interfaces =======
interface GenericIdentityFn<T> {
  (arg: T): T;
}
let myIdentity: GenericIdentityFn<number> = identity;
// console.log(myIdentity(10)); // 10

// ======= generic classes =======
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor() {
    this.zeroValue = null as any;
    this.add = function (x: T, y: T): T {
      return x;
    };
  }
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;

myGenericNumber.add = function (x, y) {
  return x + y;
};

// console.log(myGenericNumber.add(5, 10)); // 15

// ======= generic constraints =======
// -> constraint is a way to limit the types that can be used in a generic function or class
// in simple terms, we can use 'extends' keyword to create a constraint
// here, we are constraining the generic type T to types that have a 'length' property

interface Lengthwise {
  length: number;
  //   toUpperCase(): string;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  // console.log(arg.toUpperCase());
  return arg;
}
// loggingIdentity('Hello'); // 5
// loggingIdentity([1, 2, 3, 4]); // 4
// loggingIdentity({ length: 10, value: 3 }); // 10

// ======= generic type aliases =======
// -> type aliases allow us to create a new name for a type

type GenericIdentity<T> = (arg: T) => T;
let myGenericIdentity: GenericIdentity<number> = identity;
// console.log(myGenericIdentity(20)); // 20

// ======= utility types =======
// -> TypeScript provides several utility types to facilitate common type transformations

interface PersonDetails {
  name: string;
  age: number;
  location: string;
}
type PartialPerson = Partial<PersonDetails>;
type ReadonlyPerson = Readonly<PersonDetails>;
type PickedPerson = Pick<PersonDetails, "name" | "age">;
type OmittedPerson = Omit<PersonDetails, "location">;

const person1: PartialPerson = { name: "Alice" };
const person2: ReadonlyPerson = { name: "Bob", age: 25, location: "NY" };
// person2.age = 30; // error
const person3: PickedPerson = { name: "Charlie", age: 30 };
const person4: OmittedPerson = { name: "David", age: 40 };
// console.log(person1, person2, person3, person4);

// ======= enums =======
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
// console.log(myColor); // 1

// let anohterColor: Color = "Red";
// console.log(anohterColor); // error

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let myDirection: Direction = Direction.Left;
// console.log(myDirection); // LEFT

// ======= tuple =======
let tupleExample: [number, string, boolean];
tupleExample = [1, "hello", true];
// tupleExample = [1, 2, 3]; // error
// tupleExample = ["hello", 1, true]; // error


// ======= type aliases =======
type StringOrNumber = string | number;
let sampleVar: StringOrNumber;
sampleVar = "Hello";
sampleVar = 100;
// sampleVar = true; // error
// console.log(sampleVar);

// ======= interfaces =======
interface Car {
  make: string;
  model: string;
  year: number;
  getDetails(): string;
}
let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    },
};
// console.log(myCar.getDetails()); // 2020 Toyota Camry

// ======= classes =======
class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    public speak(): string {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    public speak(): string {
        return `${this.name} barks.`;
    }
}

let myDog = new Dog("Rex");
// console.log(myDog.speak()); // Rex barks.
// console.log(myDog.name); // error: 'name' is private

