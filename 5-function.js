const prompt = require('prompt-sync')();

// function hello() {
//   console.log('Hello, world!');
// }

// f(x) = y
// hello();

// let width = 20;
// let height = 10;

// let result = width * height;

// console.log(result);

// let width2 = 33;
// let height2 = 5;

// let result2 = width2 * height2;
// console.log(result2);

// function areaSquare(width, height) {
//   let area = width * height;
//   if (width < 0 || height <= 0) {
//     console.log('invalid number');
//   }
//   return area;
// } 

// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }

// const add = function(a, b) {
//   let sum = a + b;
//   return sum;
// }

// const add = (a, b) => {
//   if (a === b) {
//     a++;
//   }
//   return a + b
// };

// console.log(typeof add(1, 2))

// let sum2 = add(1, 2);
// let sum3 = sum2 + add(3, 4);
// let areaSq = areaSquare(10, 20);
// let areaSq2 = areaSquare(30, 40);
// console.log(areaSq);

// function addThree(...numbers) {
//   console.log('c = ', c);
//   const sum = a + b + c;
//   return sum;
// }

// function sum(a, b, ...numbers) {
//   console.log('length = ', numbers.length)
//   return numbers.reduce((total, n) => total + n, 0);
// }

// function sumOld(a, b, numbers = []) {
//   return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sumOld(1, 2, [1, 2, 4]));
// console.log(sum(1, 2, 4, 6, 7));

// function doSomethingWithName(name, age, callback) {
//   let info = `Hello, ${name}`;
//   callback(info, age);
//   return info;
// }

// const showInfo = function(info, age) {
//   console.log(info)
// }

// const showYearOfBirth = function(info, age) {
//   const year = 2025 - age;
//   console.log(info);
//   console.log(year)
// }

// doSomethingWithName('Mung', 29, () => {
//  console.log(info)
// });
// doSomethingWithName('Ice', 30, showYearOfBirth);

// higher-order
// function createMultiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const triple = createMultiplier(3);
// console.log(triple(5))

// (function () {
//   console.log("This runs immediately");
// })();

// async - await
// async function a(){ // นาย ก
//   await console.log('Hello a1')
//   await console.log('Hello a2')
//   await console.log('Hello a3')
// }

// async function b(){ // นาย ข
//   await console.log('Hello b1')
//   await console.log('Hello b2')
//   await console.log('Hello b3')
// }

// (async function () {
//   await a()
//   await b()
// })();

// 5! = 5 * 4 * 3 * 2 * 1;
let n = 5;
let fac = 1;
for (let i = n; i > 0; i--) {
  fac = fac * i;
}
console.log(fac);

// 5! = 5 * 4! => fac(5) = 5 * fac(4)
// 4! = 4 * 3! => fac(4) = 4 * fac(3)
// 3! = 3 * 2! => fac(3) = 3 * fac(2)
// 2! = 2 * 1 => fac(2) = 2 * fac(1)
// 1! = 1, 0! = 1 => fac(1) = 1 * fac(0)
// fac(0) = 1
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));




