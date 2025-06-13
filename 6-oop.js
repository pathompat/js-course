// const arr = [1, 2, 3]; // Class 
// console.log(arr.length);
// console.log(arr.filter(e => e > 5));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
//   }
// }

// const john = new Person("John", 27);
// // const john = Person.name;

// class MathUtil {
//   static PI = 3.14;
//   static square(x) {
//     return x * x;
//   }
//   static reactangle(w, h) {
//     return w * h;
//   }
//   static circle(r){
//     return r * PI;
//   }
// }
// // const math = new MathUtil();
// console.log(Math.PI);
// console.log(MathUtil.square(5));
// console.log(MathUtil.reactangle(5, 6));

// const mary = new Person("Mary", 30);
// console.log(john);
// console.log(mary);

// john.introduce();
// john.addAge(15);
// console.log(john.age);

// const john = new Person("John", 20);
// john.age = 28;
// console.log(john);

// class BankAccount {
//   #balance;

//   constructor(initialBalance) {
//     this.#balance = initialBalance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance());
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared

// class MathUtil {
//   static PI = 3.14;
//   static square(x) {
//     return x * x;
//   }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.square(5));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    console.log(this.studentId)
  }

}

const john = new Person("John", 28);
console.log(john);
john.introduce();
// john.getStudentId();
console.log('-------------');

const alice = new Student("Alice", 16, "S68001");
console.log(alice);
alice.introduce();
alice.getStudentId();