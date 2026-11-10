
//Task 1 (Object Destructuring):

const laptop = {
    "Brand" : "Dell",
    "ram" : "16gb",
    "processor" : "i7",
    "price" : 80000
};

const {Brand, ram, processor, price} = laptop
console.log(`i want to buy a ${Brand} Laptop it has ram of ${ram} and has ${processor} processor it costs around ${price} thousand rupess`);

//Task 2 (Array Destructuring):

const topskills = ['java','html','css','javascript'];
const [skill1, skill2, skill3, skill4] = topskills;

console.log(skill1);
console.log(skill3);



//object destructuring

const developer = {
    name: "Sri Pallav",
    age: 22,
    city: "Hyderabad",
    role: "MERN Developer"
};


// without using destructuring
console.log(developer.name,developer.city,developer.age,developer.role);

//here we have written developr.name,developer.city......every time
//we are writting developr. to avoid and make it simple the modern javascript introduced the destructuring concept)

//with destructuring

const { name, age, city, role} = developer;
console.log(name,age,city,role);


//array destructuring

//without destructuring

const arr = ["red","green","blue"];

const firstcolor = arr[0];
const secoundcolor = arr[1];

console.log(firstcolor);

//with destructuring we can directly assign inside the [] brackets

const [firstcolour,secoundcolour,thirdcolour] = arr
console.log(secoundcolour);










