const prompt = require('prompt-sync')();

// part 0: basic
console.log(1 + 1);
console.log(true && false);
console.log(null);
console.log(1.2121);
console.log(typeof true);
console.log('------------');

// part 1:
const PI = 3.14;
let number = 21;
number = 22;
number = number + 10;
number += 10;
number++;
console.log(number);
console.log('------------');

// input
let input = parseInt(prompt(`please input number`));

// process
input = input * 2;

// part 2: if/else
if (input <= 5) {
  console.log('number is less than 5');
} else if (input > 5 && input < 10) {
  console.log('case 2')
} else {
  console.log('case 3')
}
console.log('------------');

// part 3: loop
let sum = 0;
for(let i = 0; i < 5; i++) {
  sum = sum + input;
}
console.log(sum);
console.log('------------');

// part 4: array & object
const listData = [1, 2, 3, 4];
const userData = {
  userName: 'mungggy',
  password: '14342',
}

// output
console.log(listData);
console.log(userData);

