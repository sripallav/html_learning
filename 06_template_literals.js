//normal without using template literals

const myname = "sripallav";
const age = 22;
const city = "Hyderabad";

console.log("my name is " + myname + " iam " + age + " years old! " + " iam from the city " + city);

//see here we used so many + and " " and also we have to care about spacing to avoid all this template literals were introduced in modern js

//using template literals

console.log(`my name is ${myname} iam ${age} years old! iam from the city ${city}`);

//here by using ` backticks and $ {} it becomes much easier and simple english like sentence in this way the template literals are very useful


//Task 1 (Joining Variables):

const name = "Sri Pallav";
 const role = "MERN Developer";
 const company = "Google";

 console.log(`my name is ${name} my role is ${role} in the company ${company}`);


 //Task 2 (Math Expression inside ${}):

 const laptopPrice = 50000;
 const discount = 5000;

 console.log(`The final Laptop price after the dicount is ${laptopPrice-discount}`);


 //Task 3 (Arrow Function with Backticks):



 const info = (user,score) => {
    if(score>80){
        console.log(`The user ${user} has made the score ${score} was outstanding`);
    }
    else{
        console.log(`The user ${user} has made the score ${score} was ok`);

    }
 }

 info("sripallav",90);



