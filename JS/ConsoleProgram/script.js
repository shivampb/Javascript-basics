console.log("hello world");
// Arithmetic operators
let num1 = 10;
let num2 = 5;

console.log("Arithmetic Operators:");
console.log("ADD: ", num1 + num2);
console.log("SUB: ", num1 - num2);
console.log("MULTI: ", num1 * num2);
console.log("DIVIDION: ", num1 / num2);
console.log("MODULOUS: ", num1 % num2);
console.log("EXPONENTIONAL: ", num1 ** num2);

//Assignment operators
let x;
console.log("Assignment Operators: ");
console.log("VALUE ASSIGNED: ", x = 10);
console.log(" 'X' value: ", x);
x += 5;
console.log("x += 5: ", x);
x -= 5;
console.log("x -= 5: ", x);
x *= 5;
console.log("x *= 5: ", x);
x /= 5;
console.log("x /= 5: ", x);

//boolean
let p = true;
let q = false;
console.log("P && Q : ", p && q);
console.log("P || Q : ", p || q);
console.log("!p : ", !p);

//Fat ARROW =>>>
const sum = (a, b) => {

    return a + b;
}

console.log(sum(50,50));