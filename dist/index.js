"use strict";
// Basic Types
let id = 5;
let company = 'Jakcosn';
let published = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5];
let names = ['jackson', 'wade', 'ntsako'];
x = true;
age = 42;
// Tuple
let person = [1, 'Jack', true];
// Tuple array
let emp;
emp = [
    [2, 'Jack'],
    [2, 'Jack'],
    [2, 'Jack'],
    [2, 'Jack'],
];
// Union
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Right"] = 2] = "Right";
    Direction1[Direction1["Left"] = 3] = "Left";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Right"] = "Right";
    Direction2["Left"] = "Left";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// functions
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => `${a} - ${b}`;
// Void
const give = (txt) => console.log(txt);
const user1 = {
    id: 6,
    name: 'John',
};
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const Ntsako = new Person(1, 'Ntsako');
const Rad = new Person(2, 'Rad');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const employee = new Employee(1, 'Jack Septic', 'Boss');
// Generics
const getArray = (items) => new Array().concat(items);
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(['1', '2', '3', '4', '5', '6']);
strArray.push('Heyyy');
