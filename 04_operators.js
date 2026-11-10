const placed = true;

if(placed){
    console.log("congrats for ur placement");

}
else{
    console.log("keep practicing");
}

//modern one line way

const message = placed ? "congrats" : "keep practicing";
console.log(message);

//strict eqallity and lose equality

const num1 = 10;
const num2 = "10";
console.log(10=="10");
console.log(10==="10");

//Boolean comparison
console.log(true == 1);
console.log(false == 0);  // Loose

console.log(true === 1);   // Strict


//ternary operator

//ex:1

const marks = 45;
const result = marks>65? "pass" : "fail";
console.log(result);

//ex:2

const logged = 'true';
const userlogin = logged ? "logged sussessfully" : "not loggedin";
console.log(userlogin);



