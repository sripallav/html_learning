//Problem 1

const mul = (a,b) => a*b;
console.log(mul(10,20));

//problem 2

const gst = (price) => price*0.18;
console.log(gst(1000));

//problem 3

const marks = a => {
    if (a>=40){
        return 'pass';
    }
    else{
        return 'fail';
    }
}

console.log(marks(60));


// const name = "Sripallav";

// function greet(name){
//     return 'hello ' + name;
// }

// console.log(greet(name));

// //arrow function

// const greets = (name) => {
//     return 'hello ' + name;
// };

// console.log(greets(name));

// //adding two numbers without arrow function

// const a = 10;
// const b = 20;

// function add(a,b){

//     return a+b;

// }

// console.log(add(a,b));

// ////adding two numbers with arrow functions

// const adds = (a,b) => {
//     return a+b;
// }
// console.log(adds(2,5));

// //simple arrow function

// const sub = (a,b) => a-b;
// console.log(sub(30,10));

// //multiplication arrow function

// const multi = (a,b) => a*b;
// console.log(multi(4,2));

// //multiplication with normal function

// function mult(a,b){
//     return a*b;
// }

// console.log(mult(10,20));


//normal function

// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20));


// //arrow function

// const adds = (a,b) => a+b;
// console.log(adds(30,40));

//Multi-Line Arrow Function

const eligible = a => {

    if(a>=18){

        return "eligible to vote";
    }

    else{
        return "not eligible to vote";
    }

}

console.log(eligible(22));


//ternary operator

const age = a => a>=18 ? "eligible" : "not eligible";
console.log(age(24));










