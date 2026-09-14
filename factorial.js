let num = 5;
let fact = 1;

for(let i=1;i<=5;i++){
    fact = fact * i;
}

console.log(fact);

//palidrome

let num1 = 121;

let original = 121;
let rev = 0;

while(num1>0){

    let digit = num1%10;
    rev = rev*10+digit;
    num1 = Math.floor(num1/10);
}

if(rev==original){
    console.log("palindrome")
}
else{
    console.log("not a palindrome");
}

//do-while

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);




