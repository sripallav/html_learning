
//Task 1 (Array Spread):

const frontend = ["html","css","javascript"];

const fullstack = [...frontend,"react","node js"];
console.log(fullstack);


//Task 2 (Object Spread - React State Simulation):

const product = {
    title: "Smartphone",
    brand: "Samsung",
    price: 30000
};

const discountedprice = {
    ...product,
    price:25000
};

console.log(discountedprice);


//Task 3 (Rest Operator):

const friends = ["sripallav","vamsi","vinod","rahul"];

const [myname,...otherfriendsname] = friends;

console.log(myname);
console.log(otherfriendsname);




















// //older way for combaining two arrays..

// const frontend = ["html","css","java script"];
// const backend = ["nodejs","express js"];

// const b = frontend.concat(backend);
// console.log(b);

// //using spread operator

// const c = [...frontend,...backend];
// console.log(c);

// //adding new element or item into an array

// const d = [...frontend,"react"];
// console.log(d);


// //spread operator with objects

// const mydata = {
//     name : "sripallav",
//     age : 21,
//     course : "FSD"
// };

// const myupdateddata = {
//     ...mydata,
//     age : 22

// };

// console.log(myupdateddata);




