/**
 *Linking a JavaScript File
 */
let js = "Amazing";
if (js === "Amazing") {
  alert("Javascript is fun");
}
console.log(40 + 43 - 45 - 45 + 1);
/**
 * Values and Variables
 *  1.  Use camel casing
 *  2.  variable should use alphabate, number and Underscore(_), dolor($)
 *  3.  variable should not start with upperlatter.
 *  4.  variable should not start with number.
 *
 */
console.log("Jonas");

let firstName = "bob";
console.log(firstName);

let myFirstJob = "programmer";
let myCurrentJob = "teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jones");

javascriptIsFun = "This is String";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);

const birthDate = 1987;
console.log(birthDate);
//birthDate = 1988;
console.log(birthDate);

var job = "programmer";
console.log(job);

const fName = "Sidhanth";
const working = "programmer";
const dob = 1987;
const thisYear = 2025;

const details =
  "I'm " +
  fName +
  " , a " +
  (thisYear - dob) +
  " years old " +
  working +
  "!!!!";

console.log(details);

const detailsNew = `I'm ${fName} , a ${thisYear - dob} years old ${working}`;
console.log(detailsNew);

const driveAge = 19;
const isOIldEnough = driveAge >= 18;

if (isOIldEnough) {
  console.log(`He can drive`);
} else {
  console.log(`He can't drive...`);
}
