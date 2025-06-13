// let number1 = 0;
// let number2 = 1;
// let number3 = 2;
// console.log(number1);
// number1 = number1 + 1;

// let number = 1;
// let cloneNumber = number;

// let fruits = ["Apple", "Banana", "Cherry", "Orange"];
// const newFruits = fruits.slice();

// let length = 0;
// while (fruits[length] !== undefined) {
//   length++;
// }
// console.log(length);
// const length = fruits.length;
// fruits[length] = "Melon";
// console.log(fruits);

// fruits.push("Melon");
// fruits.unshift("Avocado");
// console.log(fruits);

// fruits.sort();
// console.log(fruits);

// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(fruits[i]);
// }

// console.log("--------");

// fruits.forEach((fruit, index) => {
//   console.log(fruit, index);
// });

// const upperFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(upperFruits);
// console.log("--------")

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

// for (let fruit of fruits) {
//   console.log(fruit);
//   // let new_fruit = fruit + "_new";
//   // console.log(new_fruit);
// }

// 3d array
// const matrix = [
//   [[177, 92, 63], [177, 92, 63], [177, 92, 63]],    
//   [[177, 92, 63], [177, 92, 63], [177, 92, 63]], 
//   [[177, 92, 63], [177, 92, 63], [177, 92, 63]],
// ];
// console.log(matrix[0][0]);

// const matrix = [
//   [1, 2, 3],    
//   [4, 5, 6], 
//   [7, 8, 9] 
// ];

// console.log(matrix[0][1]); // 2
// console.log(matrix[2][0]); // 7

// // Loop in 2d array
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
//   }
// }

// const personArray = {
//   0: "John",
//   1: "Doe"
// }
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
//   address: {
//     city: "Bangkok",
//     postCode: "11000"
//   },
//   history: [
//     19922, 92221, 12322
//   ]
// };
// console.log(person.address.city)
// console.log(person.history[0])
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// person.address = "Address";
// person.age = 28;
// delete person.isStudent;
// // console.log(person)

// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// const fruits = ["Apple", "Banana"];

const users = [
  { id: 1, name: "Alice", password: "Test", isActive: true },
  { id: 2, name: "Bob", password: "Test", isActive: false },
  { id: 3, name: "Charlie", password: "Test", isActive: true }
];

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i].name);
// }
// console.log('--------');

// users.forEach((user) => console.log(user.name));
// const activeUsers = users.filter((user) => user.isActive === true);
// console.log(activeUsers);

// const found = users.find(user => user.name === "Bob");
// console.log(found);

const names = users.map(user => user.name);
console.log(names);

// console.log(users[0].name)
