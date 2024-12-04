
// Arithmetic Operators
let num1 = 10;
let num2 = 20;


console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// Relational Operators
let marks = 72;

if(marks <= 35) {
    console.log("Pass");
} else if(marks <= 50) {
    console.log("above average");
} else if(marks <= 75) {
    console.log("fine...");
} else if(marks <= 90) {
    console.log("good");
} else if(marks == 100) {
    console.log("Wow Super");
}


// Logical Operators
let citizenship = "Indian";
let age = 21;
let wantPermanentCitizenship = true;
let govtEmployee = false;

// Logical AND
if(citizenship == "Indian" && age >= 18) {
    console.log("Eligible to voting....");
} else {
    console.log("Grow up kid....");
}

// Logical OR
if(wantPermanentCitizenship == true || govtEmployee == false) {
    console.log("Eligible for permanent citizenship in india");
}

