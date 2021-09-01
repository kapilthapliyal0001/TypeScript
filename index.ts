console.log("Hello Typescript")

let x = "Kapil"
console.log(x)

// TYPE INDERENCE

// x = true
// x = 100
// TS makes the JS a strongly typed languag

const user = {
    name : "Kapil",
    country : "India"
}

console.log(user.name)

// Typed examples;
let y : number[]
let z : Array<Array<string>>

// I have declared the variable with its type and 
//  initialize the variable.
let arrayOfStrings : string[] = []

arrayOfStrings.push('kapil')
// arrayOfStrings.push(5)

// z.push('ste')

// const addition = (n1, n2) => {
//     if (typeof n1 === 'number' && typeof n2 === 'number') {
//         return n1 + n2
//     } else {
//         return 'these are not numbers !'
//     }
// }

// custom type

type MyType = string | number  //type union 

const addition = (n1 : MyType, n2 : MyType) => {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2
    } else {
        return 'these are not numbers !'
    }
}

addition('3', '4').toString()
addition(3, 4)

type MyObject = {
    name : string, 
    surname : string, 
    age : number
}

interface MyObjType {
    name : string
    surname : string
    age : number
}

// interfaces are more suited for
//  the objects as they can be
//  extended and types are not extendible 

interface AnotherObject extends MyObject {
    country : string
}

let student : MyObject = {
    name : 'Stefano',
    surname : 'Casasola',
    age : 35
}

let professor : AnotherObject = {
    name : 'David',
    surname : 'Revic',
    age : 21,
    country : 'India'
}

interface Teacher {
    firstName : string
    lastName : string
    roles : string[]
    age? : number
    // age is not mandatory anymore
}

const striveTeachers : Teacher[] = [
    {
        firstName : 'Stefano',
        lastName : 'Casasola', 
        roles : ['Tutor/FrontEnd', 'tycoon'],
        age : 35
    }
]



