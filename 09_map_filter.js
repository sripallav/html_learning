// Task 1 (.map() on Numbers):
// Create: const prices = [100, 200, 300, 400];
// Use .map() to add 18% GST (multiply by 1.18) to every price.
// Print the new array pricesWithGST.

const prices = [100, 200, 300, 400];
const newprices = prices.map(prices=>prices*1.18);
console.log(newprices);

// Task 2 (.map() on Objects - React Simulation):
// Create:
// javascript
// const developers = [
//     { name: "Sri Pallav", salary: 80000 },
//     { name: "Vamsi", salary: 75000 },
//     { name: "Vinod", salary: 70000 }
// ];
// Use .map() to extract only the developer names: const names = developers.map(dev => dev.name);
// Print names.

const developers = [
    { name: "Sri Pallav", salary: 80000 },
    { name: "Vamsi", salary: 75000 },
    { name: "Vinod", salary: 70000 }
];

const developer_names = developers.map(developers=>developers.name);
console.log(developer_names);



// Task 3 (.filter() - Deleting/Filtering Items):
// Using the same developers array from Task 2:
// Use .filter() to get only developers whose salary is >= 75000.
// Print highEarners.


const developers_salaries = developers.filter(developers => developers.salary>=75000

);

console.log(developers_salaries);





// //old way using for loop without map

// const arr = [2,5,8,9,10];
// const arr1 = [];

// for(let i=0;i<arr.length; i++) {

//     arr1.push(arr[i] * 2);

// }

// console.log(arr1);

// //using map es6 feature

// const arr2 = arr.map(arr => arr*2);
// console.log(arr2);



// //real mongodb usage

// const users = [
//     { name: "Sri Pallav", role: "Developer" },
//     { name: "Rahul", role: "Designer" }
// ];

// // In React, we extract just the names to display on screen:
// const userNames = users.map(users => users.name);

// console.log(userNames); // ["Sri Pallav", "Rahul"]


// //using filter

// const marks = [89,65,46,85,22,78,15,38];
// const selectedmarks = marks.filter(marks=>marks>60);
// console.log(selectedmarks);

