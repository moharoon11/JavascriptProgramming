// var, let and const

/**
 * var keyword
 * 
 * Reassignment and Redefinition possible
 * 
 */

var name = "Mohamed Haroon";
console.log(name);
var name = "haroon";

function printName() {
    var name = "Mohamed Umar";
    console.log(name);
}

printName();
console.log(name);


/**
 * let keyword
 * 
 * Redefinition not possible
 * Reassingment possible
 * Block Scope
 * Cannot acess outside the block
 */

let myName = "Haroon";

/** ERROR: REDEFINITION NOT POSSIBLE -> IDENTIFIER ALREADY DEFINED
 * let myName = "Mohamed"
 * 
 * */

// Reassignment Possible
myName = "Mohamed Haroon";


function wishGreetings() {
    let wish = "Hello";
    console.log(wish);
}

let wish = "Hii";
console.log(wish);
/**Error: Cant acess the wish variable outside the function block -> wish is not defined
 * console.log(wish);
 */


/**
 * const keyword
 * 
 * Redifinition and Reassignment not possible
 */

const isGravityOnEarth = true;

/**
 * Reassignment is not possible
 * isGravityOnEarth = false;
 */

function isGravityThere() {
    const isGravityPresentOnEarth = true;
    console.log(isGravityPresentOnEarth);
}

isGravityThere();

// console.log(isGravityPresentOnEarth);



/** Datatypes
 * 
 *  primitive and non primitive
 * 
 *   primitive
 *   1. Numbers
 *   2. BigInt -> -2 ^ 51 - 1 ---> +2 ^ 51 - 1 can store equal or larger then this range
 *   3. Strings
 *   4. Symbol
 *   5. null
 *   6. undefined--> if not assigned anything
 *   7. boolean   
 */

let mobileName = "Vivo v17 pro";
let mobileCost = 30000;
let processor = "snapdragon 680";
let version = 7.2;
let isPopupCamera = true;
let performance;
let doILikeIt = null;

console.log(mobileName);
console.log(mobileCost);
console.log(processor);
console.log(version);
console.log(isPopupCamera);
console.log(performance);
console.log(doILikeIt);

// typeOf keyword helps to find the datatype
console.log(typeof mobileName);
console.log(typeof mobileCost);;
console.log(typeof processor);
console.log(typeof version);
console.log(typeof isPopupCamera);
console.log(typeof performance);

// null is an object type
console.log(typeof doILikeIt);
