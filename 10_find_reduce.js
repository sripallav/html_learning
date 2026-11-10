// Task 1 (.find()):

const products = [
    { id: 1, name: "Mouse", price: 500 },
    { id: 2, name: "Keyboard", price: 1200 },
    { id: 3, name: "Monitor", price: 15000 }
];

const requiredproduct = products.find(product => product.id===2);
console.log(requiredproduct);



// Task 2 (.reduce()):

// Task 2 (.reduce()):
// Create: const expenses = [1200, 450, 350, 1000];
// Use .reduce() starting from 0 to calculate totalExpense.

const expenses = [1200, 450, 350, 1000];
const totalexpenses = expenses.reduce((total,expences) => total+expences,0);
console.log(totalexpenses);






// //find


// const users = [
//     { id: 101, name: "Sri" },
//     { id: 102, name: "Vamsi" },
//     { id: 103, name: "Vinod" }
// ];

// const foundUser = users.find(user => user.id === 102);

// console.log(foundUser);     
// console.log(foundUser.name); 


// //reduce

// const basket = [50, 40, 100];

// const finalBill = basket.reduce((total, item) => total + item, 0);

// console.log(finalBill); 

