// E-Commerce Shopping Cart Capstone (Combines Spread, Filter, Map, Reduce, Destructuring, Template Literals)

const initialCart = [
    { id: 1, name: "Mechanical Keyboard", price: 2500, qty: 1 },
    { id: 2, name: "Wireless Mouse", price: 1200, qty: 2 },
    { id: 3, name: "USB-C Hub", price: 1500, qty: 1 }
];

// 1. Add a new item immutably using Spread (...)
const newItem = { id: 4, name: "Laptop Stand", price: 900, qty: 1 };
const updatedCart = [...initialCart, newItem];

// 2. Remove an item (id === 3) using .filter()
const activeCart = updatedCart.filter(item => item.id !== 3);

// 3. Format receipt lines using .map() and Destructuring
const receiptLines = activeCart.map(({ name, price, qty }) => {
    return `${name} (x${qty}) -> ₹${price * qty}`;
});

console.log("=== Cart Receipt ===");
console.log(receiptLines.join("\n"));

// 4. Calculate Grand Total using .reduce()
const grandTotal = activeCart.reduce((total, item) => total + (item.price * item.qty), 0);

console.log("====================");
console.log(`Grand Total: ₹${grandTotal}`);
