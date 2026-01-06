// function greet(person: string): string {
//   return `Hello, ${person}!`;
// }

// const username: string = "Anurag";
// console.log(greet(username));

// class Chai{
//   serve(){
//     return console.log("Serving Chai"); 
//   }
// }

// function makeTea(tea: Chai){
//   if(tea instanceof Chai){
//     return tea.serve();
//   }
// }

// const myTea = new Chai();

// makeTea(myTea);

// =========== user of interface ===========

// type User = {
//   name: string;
//   age: number;
// };

// class Person implements User {
//   constructor(public name: string, public age: number) {
//     return;
//   }
//   greet() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// const user1 = new Person("Anurag", 23);
// console.log(user1.greet());

// type chai = "Masala Chai" | "Adrak Chai" | "Elaichi Chai";

// interface chai {
//   type: "Masala Chai" | "Adrak Chai" | "Elaichi Chai";
// }

// class TeaShop implements chai {
//   constructor(public type: "Masala Chai" | "Adrak Chai" | "Elaichi Chai") {}
//   serveTea() {
//     return `Serving a cup of ${this.type}`;
//   }
// }

// const myTea = new TeaShop("Masala Chai");
// console.log(myTea.serveTea());

// TYPE ASSERTION
// let someValue: unknown = "This is a string";
// let strLength: number = (someValue as string).length;
// console.log(`Length of the string is: ${strLength}`);

// ==== object in typescript ====

// type Person = {
//   name: string;
//   age?: number;
// };

// const person1: Person = {
//   name: "Anurag",

// };

// type PersonDetails = {
//   name: string;
//   age: number;
//   address: string;
//   geneder: "male" | "female";
//   hobbies: string[];
// }

// type PersonNameAndAge = Pick<PersonDetails, "name" | "age">;

// const person1: PersonNameAndAge = {
//   name: "Anurag",
//   age: 23
// };

// type PersonWithoutAddress = Omit<PersonDetails, "address">;

// const person2: PersonWithoutAddress = {
//   name: "Anurag",
//   age: 23,
//   geneder: "male",
//   hobbies: ["reading", "coding"]
// };

// type PartialPerson = Partial<PersonDetails>;

// const person3: PartialPerson = {
//   name: "Anurag",
// };

// type RequiredPerson = Required<PersonDetails>;
// const person4: RequiredPerson = {
//   name: "Anurag",
//   age: 23,
//   address: "123 Main St",
//   geneder: "male",
//   hobbies: ["reading", "coding"]
// };

// type ReadonlyPerson = Readonly<PersonDetails>;
// const person5: ReadonlyPerson = {
//   name: "Anurag",
//   age: 23,
//   address: "123 Main St",
//   geneder: "male",
//   hobbies: ["reading", "coding"]
// };

// person5.hobbies.push("traveling"); // Error: Cannot assign to 'hobbies' because it is a read-only property
// // person5.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property 


// type user = { name: string; age: number };
// type role = { role: string };
// type SuperUser = user & Admin;

// const superUser1: SuperUser = { name: "Anurag", age: 23, role: "Administrator" };

// type Person = {
//   users: user[];
//   readonly role: role; // this property is read-only you cannot modify it after initialization
// }

// class Shop{
//     shopName: string;
//     constructor(name: string){
//         this.shopName = name;
//     }
// }

// class Branch extends Shop{
//     branchLocation: string
//     constructor(name: string, location: string){
//         super(name);
//         this.branchLocation = location;
//     }
//     getDetails(): string{
//         return `Shop Name: ${this.shopName}, Branch Location: ${this.branchLocation}`;
//     } 
// }

// const myBranch = new Branch("Tea House", "Downtown");
// console.log(myBranch.getDetails());

// ===== Generics in TypeScript =====

// function wrapInArray<T>(value: T): T[] {
//   return [value];
// }

// const numberArray = wrapInArray({flavor: "Masala", temperature: "Hot"});
// console.log(numberArray); // Output: [42]

// function pair<A,B>(a: A, b: B): [A, B] {
//     return [a, b];
// }

// interface Box<T>{
//     content: T
// }

// const stringBox: Box<string> = { content: "Hello, World!" };
// const numberBox: Box<number> = { content: 42 };

// console.log(stringBox, numberBox);
