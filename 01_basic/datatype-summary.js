// primitive data type

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score=1000;
// const scoreVlaue=2.333;
// const isLogin=true;
// const output=null;
// let userEmail;

// console.log(typeof scoreVlaue)
// console.log(output)

// const id=Symbol('123')
// console.log(id)
// console.log(typeof id)
const anotherId=Symbol('123')
// console.log(id===anotherId)

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log([typeof anotherId,typeof heros,typeof myObj]);