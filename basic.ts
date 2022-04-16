// Basic Types
const id: number = 5
const company: string = 'Company'
const isPublished: boolean = true
const x: any = 'Hi'

// Array
const ids: number[] = [1, 2, 3, 4]
const arr: any[] = [1, true, 'Hi']

// Tuple
const person: [number, string, boolean] = [1, 'Person', true]

// Tuple Array
const employees: [number, string][] = [
  [1, 'Person1'],
  [2, 'Person2'],
  [3, 'Person3'],
]

// Union
const pid: string | number = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'Person',
}

// Type Assertion
const cid: any = 1
const customerId = cid as number //<number>cid

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interface
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x, y) => x + y
const sub: MathFunc = (x, y) => x - y

// Classes
interface PersonInterface {
  id: number
  name: string
  register(): string
}

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

const person1 = new Person(1, 'Person1')
const person2 = new Person(2, 'Person2')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Person3', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

const numArray = getArray<number>([1, 2, 3, 4])
const strArray = getArray<string>(['Person1', 'Person2', 'Person3'])
