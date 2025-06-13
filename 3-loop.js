const prompt = require('prompt-sync')();

// for (let i = 1; i <= 12; i++) {
//   console.log(`\n--- Multiplication Table of ${i} ---`);
//   for (let j = 1; j <= 12; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// let i = 1; // parseInt(prompt('input number'));
// while (i < 6) {
//   console.log(i);
//   i++;
// }
// console.log("-----------")
// for (let i = 1; i < 6; i++) {
//   console.log(i); i += 2 => i = i + 2
// }

// let input = null;

// while (input !== "0") {
//   input = prompt("กรุณาใส่ตัวเลข (พิมพ์ 0 เพื่อจบ):");
//   console.log("คุณพิมพ์:", input);
// }

// let multiplier = 4;
// for (let i = 1; i <= 12; i++) {
//   let result = multiplier * i;
//   console.log(multiplier, ' x ', i, ' = ', result);
// }


// let input;

// do {
//   input = prompt("กรอกข้อความ (พิมพ์ exit เพื่อออก):");
//   console.log("คุณพิมพ์:", input);
// } while (input !== "exit");
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     break;
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i = ${i}, j = ${j}`);
//     if (j === 2) {
//       break;
//     }
//   }
//   if (i === 1) {
//     break;
//   }
// }

// for (let i = 2; i <= 12; i++) {
//   console.log('----multiplication table', i, '-----')
//   // console.log(`--- Multiplication Table of ${i} ---`);
//   for (let j = 1; j <= 12; j++) {
//     const result = i * j;
//     // console.log(`${i} x ${j} = ${result}`);
//     console.log(i, ' x ', j, ' = ', result);
//   }
// }

// Solve exercise iteration-1
let sum = 0;
let product = 1;
for (let i = 0; i < 5; i++) {
  let input = parseInt(prompt('input number: '));
  console.log('input:', input);

  sum = sum + input;
  product = product * input;
}
console.log('sum:', sum);
console.log('product:', product);