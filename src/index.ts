// Basic Types
let id: number = 5
let company: string = 'Jakcosn'
let published: boolean = true
let x: any = 'Hello'
let age: number

let ids: number[] = [1,2,3,4,5]
let names: string[] = ['jackson', 'wade', 'ntsako']

x = true
age = 42

// Tuple
let person: [number, string, boolean] = [1, 'Jack', true]

// Tuple array
let emp: [number, string][]

emp = [
    [2, 'Jack'],
    [2, 'Jack'],
    [2, 'Jack'],
    [2, 'Jack'],
]

// Union
let pid: string | number = 22

// Enum
enum Direction1 {
    Up,
    Down,
    Right,
    Left
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Right = 'Right',
    Left = 'Left'
}

// Objects
type User = {
    id: number | string,
    name: string
}


const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// functions
function add(a: number, b: number): number  {
    return a + b
}

const subtract = (a: number, b: number): string => `${a} - ${b}`

// Void
const give = (txt: any): void => console.log(txt)

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 6,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const addition: MathFunc = (a, b) => a + b
const subtraction: MathFunc = (a, b) => a - b

interface PersonInterface {
    id: number,
    name: string,
    age?: number
    register(): string
}


// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const Ntsako = new Person(1, 'Ntsako')
const Rad = new Person(2, 'Rad')


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name:string, position: string) {
        super(id, name)
        this.position = position
    }
}

const employee = new Employee(1, 'Jack Septic', 'Boss')

// Generics

const getArray = <T>(items: T[]): T[] => new Array().concat(items)

let numArray = getArray<number>([1,2,3,4,5,6])
let strArray = getArray<string>(['1','2','3','4','5','6'])

type Grade = 'Pass' | 'Fail'

let grade: Grade = 'Fail'
let score: Grade = 'Pass'



strArray.push('Heyyy')

