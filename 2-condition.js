const prompt = require('prompt-sync')();

// const input = parseInt(prompt("Enter your number:"));
// const is_number = !isNaN(input);
// console.log(is_number ? "number" : "not number");

// 1. condition
// let a = parseInt(prompt('input a'));
// let b = parseInt(prompt('input b'))

// // console.log(typeof a);

// if (a > 5 && b < 2) {
//   console.log("a");
// } else if (a > 10 && b > 5) {
//   console.log("b")
// } else {
//   console.log("c")
// }

// if (a > 5) {
//   if (b < 2) {
//     console.log("a");
//   }
// } else if (a > 10) {
//   if (b > 5) {
//     console.log("b")
//   }
// } else {
//   console.log("c")
// }

// if (a > 5) {
//   if (a < 8) {
//     console.log("a is between 5 and 7");
//   } else if (a >= 8 && a <= 12) {
//     console.log("a is between 8 and 12");
//   } else {
//     console.log("a is greater than 12");
//   }
// } else {
//   console.log("a is less than or equal to 5");
// }

// const day = new Date().getDay();
// const month = new Date().getMonth();
// console.log(day);
// console.log(month)

// switch (day) {
//   case 0:
//     console.log("It's Sunday!");
//     break;
//   case 1:
//     console.log("It's Monday!");
//     break;
//   default:
//     console.log("It's a weekday.");
// }

// if (day === 0 && month === 0) {
//   console.log("It's Sunday!")
//   console.log("It's January!")
// } else if (day === 1) {
//   console.log("It's Monday!");
// } else {
//   // ...
// }

let input = parseInt(prompt("Enter your number:"));
let is_number = !isNaN(input);
// console.log(is_number)

if (is_number === true) {
  // input = 5;
  is_number = false;
  let product = input * 2;
  console.log(product);
} else {
  console.log("not number");
}

// console.log(is_number === true ? "number" : "not number")

// console.log(is_number ? "number" : "not number");